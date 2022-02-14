<?php

$out = array();
foreach ($argv as $arg){
    $spliter = strpos($arg, '=');
    if (substr($arg, 0, 2) == '--'){
        $key = substr($arg, 2, $spliter-2);
        $out[$key] = substr($arg, $spliter+1);
    }
}

$args1 = false;
$args2 = false;

function random($length){
    $number = "0123456789";
    $alphabet = "abcdefghijklmnopqrstuvwxyz";
    $alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $special_char = "~!@#$%^&*()-_=+[]{};:,.<>/?|";
    return substr(str_shuffle(str_repeat($number.$alphabet.$alphabet_upper.$special_char, $length)), 0, $length);
}

if(!empty($out["size"]) && $out["size"] >= 1000) {
    if(!preg_match("/^[0-9]+$/", $out["size"])){
        echo "``--size`` can not contain character, please enter a number\n";
    }else{
        $args1 = true;
    }
} else {
    echo "``--size`` is empty, please select a valid number\n";
}

if(!empty($out["repeat"]) && $out["size"] >= 100) {
    if(!preg_match("/^[0-9]+$/", $out["repeat"])){
        echo "``--repeat`` can not contain character, please enter a number\n";
    }else{
        $args2 = true;
    }
} else {
    echo "``--repeat`` is empty, please select a valid number\n";
}

if($args1 && $args2) {
    $array = array();
    for ($i=0; $i < $out["repeat"]; $i++) { 
        echo $i." » ".random($out["size"])."\n\n";
    }
}else{
    echo "The command was executed incorrectly";
}
