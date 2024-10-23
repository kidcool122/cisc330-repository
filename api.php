<?php
// Create another associative array
$apiArray = [
    'fruit' => 'Apple',
    'color' => 'Red',
    'taste' => 'Sweet'
];

// Echo the array as JSON data
header('Content-Type: application/json');
echo json_encode($apiArray);
?>
