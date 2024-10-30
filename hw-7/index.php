<?php
require_once 'controllers/UserController.php';

$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/users') {
    $controller->getUsersJson();
} else {
    $controller->getUsersPage();
}
?>
