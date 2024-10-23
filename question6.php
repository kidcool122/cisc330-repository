<?php
// a. An associative array with keys and values.
$associativeArray = [
    'name' => 'Arisu',
    'age' => 20,
    'city' => 'Borderland'
];

foreach ($associativeArray as $key => $value) {
    echo "Key: $key, Value: $value<br>";
}
function greet(string $name, string $greeting = "Hello"): string {
    return "$greeting, $name!";
}
echo greet("Chota") . "<br>";
echo greet("Karube", "Welcome") . "<br>";
?>
