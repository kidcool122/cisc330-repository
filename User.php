<?php

namespace models;

class User
{
    public function getAllUsers()
    {
        // Return an array of associative arrays
        return [
            ['id' => 1, 'name' => 'Alice'],
            ['id' => 2, 'name' => 'Bob'],
            ['id' => 3, 'name' => 'Charlie'],
        ];
    }
}
