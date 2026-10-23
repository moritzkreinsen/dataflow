<?php
declare(strict_types=1);

require __DIR__ . '/app/project_store.php';

header('X-Robots-Tag: noindex, nofollow, noarchive, nosnippet', true);

$token = $_GET['p'] ?? $_GET['embed'] ?? '';
$embed = isset($_GET['embed']);
$base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
$base = $base === '' ? '/' : $base . '/';
if ($token && !dataflow_valid_token((string) $token)) {
    http_response_code(404);
    exit('Project not found.');
}
?><!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive,nosnippet">
  <meta name="googlebot" content="noindex,nofollow,noarchive,nosnippet">
  <title>Dataflow</title>
  <link rel="stylesheet" href="<?= htmlspecialchars($base, ENT_QUOTES, 'UTF-8') ?>assets/css/app.css">
  <script>
    window.DATAFLOW_BOOT = {
      token: <?= json_encode((string) $token) ?>,
      embed: <?= $embed ? 'true' : 'false' ?>,
      home: <?= (!$token && !$embed) ? 'true' : 'false' ?>,
      base: <?= json_encode($base) ?>
    };
  </script>
</head>
<body class="<?= $embed ? 'embed-mode' : '' ?>">
  <div id="app"></div>
  <script src="<?= htmlspecialchars($base, ENT_QUOTES, 'UTF-8') ?>assets/js/app.js"></script>
</body>
</html>
