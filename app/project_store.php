<?php
declare(strict_types=1);

function dataflow_legacy_project_dir(): string
{
    return __DIR__ . '/../storage/projects';
}

function dataflow_project_dir(): string
{
    static $projectDir = null;
    if ($projectDir !== null) {
        return $projectDir;
    }

    $configuredDir = getenv('DATAFLOW_PROJECT_DIR') ?: '';
    $localConfig = __DIR__ . '/local.php';
    if (is_file($localConfig)) {
        $config = require $localConfig;
        if (is_array($config) && isset($config['project_dir']) && is_string($config['project_dir'])) {
            $configuredDir = $config['project_dir'];
        }
    }

    $configuredDir = trim($configuredDir);
    if ($configuredDir === '') {
        return $projectDir = dataflow_legacy_project_dir();
    }

    if ($configuredDir[0] !== '/') {
        throw new RuntimeException('The Dataflow project directory must be an absolute path.');
    }

    return $projectDir = rtrim($configuredDir, '/');
}

function dataflow_ensure_project_dir(): void
{
    $projectDir = dataflow_project_dir();
    if (!is_dir($projectDir) && !mkdir($projectDir, 0775, true) && !is_dir($projectDir)) {
        throw new RuntimeException('Could not create the Dataflow project directory.');
    }
}

function dataflow_migrate_legacy_projects(): void
{
    static $migrationChecked = false;
    if ($migrationChecked) {
        return;
    }
    $migrationChecked = true;

    $legacyDir = dataflow_legacy_project_dir();
    $projectDir = dataflow_project_dir();
    if ($legacyDir === $projectDir || !is_dir($legacyDir)) {
        return;
    }

    dataflow_ensure_project_dir();
    $marker = $projectDir . '/.legacy-migration-v1';
    if (is_file($marker)) {
        return;
    }

    foreach (glob($legacyDir . '/*.json') ?: [] as $legacyPath) {
        $targetPath = $projectDir . '/' . basename($legacyPath);
        if (is_file($targetPath)) {
            continue;
        }

        $contents = file_get_contents($legacyPath);
        if ($contents === false || file_put_contents($targetPath, $contents, LOCK_EX) === false) {
            throw new RuntimeException('Could not migrate an existing Dataflow project.');
        }
    }

    if (file_put_contents($marker, gmdate('c') . PHP_EOL, LOCK_EX) === false) {
        throw new RuntimeException('Could not finalize the Dataflow project migration.');
    }
}

function dataflow_token(): string
{
    return rtrim(strtr(base64_encode(random_bytes(24)), '+/', '-_'), '=');
}

function dataflow_valid_token(string $token): bool
{
    return (bool) preg_match('/^[A-Za-z0-9_-]{20,80}$/', $token);
}

function dataflow_project_path(string $token): string
{
    return dataflow_project_dir() . '/' . $token . '.json';
}

function dataflow_read_project(string $token): ?array
{
    if (!dataflow_valid_token($token)) {
        return null;
    }

    dataflow_migrate_legacy_projects();
    $path = dataflow_project_path($token);
    if (!is_file($path)) {
        return null;
    }

    $json = file_get_contents($path);
    $data = json_decode($json ?: '', true);

    return is_array($data) ? $data : null;
}

function dataflow_write_project(string $token, array $project): void
{
    if (!dataflow_valid_token($token)) {
        throw new RuntimeException('Invalid project token.');
    }

    dataflow_migrate_legacy_projects();
    dataflow_ensure_project_dir();

    $project['token'] = $token;
    $project['updatedAt'] = gmdate('c');
    if (empty($project['createdAt'])) {
        $project['createdAt'] = gmdate('c');
    }

    $encoded = json_encode($project, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($encoded === false) {
        throw new RuntimeException('Could not encode project.');
    }

    file_put_contents(dataflow_project_path($token), $encoded, LOCK_EX);
}

