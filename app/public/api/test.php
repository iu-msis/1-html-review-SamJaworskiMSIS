<?php
//notes for class on 9/27/21
//php.net will be useful
#is is also a comment
/* ctrl slash will comment things in chunks
*/
//php is our intermediate layer
$num = 2;
$foo = $num . "Be"
$bar = "Or Not " . $num . " Be"

echo $foo ." ". $bar;
echo "\n";
echo $num * $num * $num;

$arr = [1,1,2,3,5,8];


$arr2 = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

if (true) {
    echo "TRUE";
} else {
    echo "FALSE";
}

//while not common for our use
while (true) {
    break;
}

//we will get the key and the value
echo "<ul>"
foreach ($arr2 $key => $val) {
    //we will never use this for class
    echo "<li>".$key." is ".$val."</li>\n";
}
echo "</ul>"

//how to make the $arr as a json
echo json_encode($arr);
echo json_encode($arr2);

//flags is an integer, we have named all of our bits and we will now say which ones we want
echo json_encode($arr2, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);

//var naming
//PHP and JS: camelCase
//constants: UPPER_SNAKE_CASE
//
//snake_case
//PascalCase (used for class names)
//kebab-case