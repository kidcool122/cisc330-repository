<?php

// Autoloading classes
spl_autoload_register(function ($class) {
    include str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
});

// Reference the UserController
use controllers\UserController;

// Instantiate UserController and call index method
$userController = new UserController();
$userController->index();
