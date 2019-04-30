<?php
    include('dbconn.php');
    $sel = "select * from index_nav_h1";
    $result = $mysqli->query($sel);
    // if($result->num_rows > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $data[] = $rows;
        }
    $sql = "select * from index_nav";
    $resultq = $mysqli->query($sql);
    while($rows = mysqli_fetch_assoc($resultq)){
        $nav[] = $rows;
    }
    $d = array('h1'=>$data,'nav'=>$nav);
    echo json_encode($d);
        // echo json_encode($nav);
    // }else{
    //     echo 'error';
    // }   
?>