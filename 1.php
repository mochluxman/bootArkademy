<?php 
    $name = "Lukman";
    $age  = 3 ;
    $address    = "Malang";
    $hobbys     = ["Bersepeda","Berenang"];
    $is_married = true;
    /* $list_school= [] */
    $skill      = ["Coding"=>'beginner'];
    $interest_in_coding = true;
    
    function tampil($name,$age){
        $array = [$name,$age];
        /* implode() */
        return json_encode($array);
    }

    echo tampil($name,$age);
    // var_dump (json_decode(tampil($name,$age)));
?>