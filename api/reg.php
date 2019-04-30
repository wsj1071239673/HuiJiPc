<?php
    header('content-type:text/html;charset=utf-8');
    $mysqli = new mysqli('localhost','root','root','rookie');
    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $user = $_GET['user'];
    $pwd = $_GET['pwd'];
    $sel = "select * from admin where user='{$user}'";
    $result = $mysqli->query($sel); 
    if($result->num_rows > 0){
        echo 'false';
    }else{
        $sql = "insert into admin (user,pwd) values ('{$user}','{$pwd}')";
        $resulti = $mysqli->query($sql);
        if($mysqli->affected_rows){
            echo 'true';
        }else{
            echo 'false';
        }
    }   
?>