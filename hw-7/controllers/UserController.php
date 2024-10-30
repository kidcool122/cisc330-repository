<?php
require_once 'models/UserModel.php';

class UserController {
    public function getUsersPage() {
        include 'views/users.html';
    }

    public function getUsersJson() {
        $userModel = new UserModel();
        $users = $userModel->getAllUsers();
        header('Content-Type: application/json');
        echo json_encode($users);
    }
}
?>
