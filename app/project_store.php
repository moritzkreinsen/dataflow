<?php
declare(strict_types=1);

const DATAFLOW_PROJECT_DIR = __DIR__ . '/../storage/projects';

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
    return DATAFLOW_PROJECT_DIR . '/' . $token . '.json';
}

function dataflow_read_project(string $token): ?array
{
    if (!dataflow_valid_token($token)) {
        return null;
    }

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

    if (!is_dir(DATAFLOW_PROJECT_DIR)) {
        mkdir(DATAFLOW_PROJECT_DIR, 0775, true);
    }

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

