<?php
declare(strict_types=1);

require __DIR__ . '/app/project_store.php';

header('X-Content-Type-Options: nosniff');

$action = $_GET['action'] ?? '';

function json_response(array $payload, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    if ($action === 'create') {
        $token = dataflow_token();
        $project = json_decode(file_get_contents('php://input') ?: '[]', true);
        if (!is_array($project)) {
            $project = [];
        }
        dataflow_write_project($token, $project);
        json_response(['ok' => true, 'token' => $token]);
    }

    if ($action === 'load') {
        $token = (string) ($_GET['token'] ?? '');
        $project = dataflow_read_project($token);
        if (!$project) {
            json_response(['ok' => false, 'error' => 'Project not found.'], 404);
        }
        json_response(['ok' => true, 'project' => $project]);
    }

    if ($action === 'save') {
        $token = (string) ($_GET['token'] ?? '');
        if (!dataflow_valid_token($token)) {
            json_response(['ok' => false, 'error' => 'Invalid project token.'], 400);
        }

        $project = json_decode(file_get_contents('php://input') ?: '', true);
        if (!is_array($project)) {
            json_response(['ok' => false, 'error' => 'Invalid project payload.'], 400);
        }

        dataflow_write_project($token, $project);
        json_response(['ok' => true, 'updatedAt' => gmdate('c')]);
    }

    if ($action === 'link') {
        $token = (string) ($_GET['token'] ?? '');
        $project = dataflow_read_project($token);
        if (!$project) {
            http_response_code(404);
            exit('Project not found.');
        }

        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
        $base = rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? ''), '/\\');
        $url = $scheme . '://' . $host . $base . '/p/' . $token;
        $title = $project['meta']['title'] ?? 'Dataflow Projekt';

        header('Content-Type: text/plain; charset=utf-8');
        header('Content-Disposition: attachment; filename="dataflow-link-' . $token . '.txt"');
        echo $title . PHP_EOL . $url . PHP_EOL . PHP_EOL;
        echo 'Wer diesen Link besitzt, kann das Projekt ansehen und bearbeiten.' . PHP_EOL;
        exit;
    }

    json_response(['ok' => false, 'error' => 'Unknown action.'], 404);
} catch (Throwable $error) {
    json_response(['ok' => false, 'error' => $error->getMessage()], 500);
}

