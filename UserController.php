<?php

namespace controllers;

use models\User;

class UserController
{
    public function index()
    {
        // Instantiate User object
        $user = new User();
        
        // Var_dump the output of getAllUsers method
        var_dump($user->getAllUsers());
    }
}
