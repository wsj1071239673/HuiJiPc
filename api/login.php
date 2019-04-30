<?php
    include('dbconn.php');
    $user = $_GET['user'];
    $pwd = $_GET['pwd'];
    $sql = "select * from admin where user='{$user}'";
    $result = $mysqli->query($sql);
    if($result->num_rows > 0){
        $data = mysqli_fetch_assoc($result);
        if($data['pwd'] == $pwd){
            echo '0';
        }else{
            echo '2';
        }
    }else{
        echo '1';
    } 
?>