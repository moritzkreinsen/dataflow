# Dataflow

Dataflow is an open-source visualisation editor for CSV, TSV, and JSON data.
Create a project without an account, keep its unguessable project URL, and
optionally encrypt its data locally in the browser before it is written to the
server.

## Host it yourself

Dataflow is deliberately uncomplicated to run. It is a small PHP application
with no package manager, build step, database, or external service required.

### Requirements

- PHP 8.1 or newer with JSON and OpenSSL enabled
- A web server capable of serving PHP (Apache, nginx with PHP-FPM, or similar)
- Git, only for installing and updating the application

### Install

```sh
git clone https://github.com/moritzkreinsen/dataflow.git
cd dataflow
```

Point the web server's document root at this directory. There are no runtime
dependencies to install: clone the repository, configure PHP hosting, and it
is ready to use.

For a local check, PHP's built-in server is sufficient:

```sh
php -S 127.0.0.1:8080
```

Open `http://127.0.0.1:8080` in a browser.

### Keep project data across updates

For production, store projects outside the Git worktree. Copy
`app/local.example.php` to `app/local.php` and set an absolute, writable
directory:

```php
return [
    'project_dir' => '/home/customer/dataflow-projects',
];
```

The application copies legacy projects to this location once, without changing
their encrypted payloads. It can then be updated safely with:

```sh
git pull --ff-only
```

`app/local.php` and project data are ignored by Git. Do not use
`git clean -fdx` in the deployment directory.

See [DEPLOYMENT.md](DEPLOYMENT.md) for hosting details and
[DOCUMENTATION.md](DOCUMENTATION.md) for the full product guide.

## Core capabilities

- Account-free projects with high-entropy editable links
- CSV, TSV, and JSON import
- Optional client-side AES-GCM password encryption using PBKDF2
- Charts, maps, tables, metrics, and SVG/PNG exports
- German and English interface and demos
- Custom colors, system fonts, hosted web fonts, and uploaded font files
- Search-engine exclusion through `robots.txt` and response headers

## License

Dataflow is released under the [MIT License](LICENSE).
