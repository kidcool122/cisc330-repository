<?php

namespace app\controllers;

use Exception;
use Error;

function myErrorHandler($errno, $errstr, $errfile, $errline) {
    echo "Custom error handler called<br>";
    echo "<b>Error:</b> [$errno] $errstr in $errfile on line $errline<br>";
    exit();
}

class ErrorController {

    public function viewErrors() {
        set_error_handler("app\controllers\myErrorHandler");

        try {
            if (true) { // Replace this condition with actual logic
                throw new Exception('Custom error message!');
            }

        } catch (Exception $e) {
            echo 'Caught Exception: ' . $e->getMessage() . "<br>";
        } catch (Error $e) {

            echo 'Caught Error: ' . $e->getMessage() . "<br>";
        }
        trigger_error('This is a custom triggered error!', E_USER_WARNING);
    }
}

// Instantiate the controller and call the function
$controller = new ErrorController();
$controller->viewErrors();

?>
