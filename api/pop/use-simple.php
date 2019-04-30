<?php
        header('content-type:text/html;charset=utf-8');
        $mysqli=new mysqli('localhost','root','root','rookie');
        if($mysqli->connect_errno){
            die();
        }
        $mysqli->set_charset('utf8');
?>