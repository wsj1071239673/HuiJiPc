<?php
    include('dbconn.php');
    $sel = "select * from trial_past";
    $result = $mysqli->query($sel); 
    if($result->num_rows > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $data[] = $rows;
        }
        echo json_encode($data);
    }   
?>