# Deployment

Dataflow stores each project as a JSON file. These files can contain encrypted
payloads and must never be committed to Git.

## Persistent project storage

On the server, copy `app/local.example.php` to `app/local.php` and set
`project_dir` to an absolute directory outside the Git worktree. A directory
outside the public web root is preferred. The PHP process must be able to read
and write that directory.

```php
return [
    'project_dir' => '/home/customer/dataflow-projects',
];
```

`app/local.php` is ignored by Git. When this setting first becomes active,
Dataflow copies every existing project from `storage/projects` to the new
directory without decoding or changing its content. This also preserves
password-encrypted projects. A migration marker is stored in the persistent
directory after the copy succeeds.

## Updating the application

Update the tracked application files with:

```sh
git pull --ff-only
```

Do not use `git clean -fdx` in the web directory: that command removes ignored
files. With `app/local.php` configured, project data lives outside the worktree
and remains intact independently of application updates.
