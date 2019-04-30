<?php
    include('dbconn.php');
    $seli = "select * from index_nav_tit";
    $selq = "select * from index_nav_list";
    $resulti = $mysqli->query($seli);
    $resultq = $mysqli->query($selq);
    // if($result->num_rows > 0){
        while($rowsi = mysqli_fetch_assoc($resulti)){
            $datai[] = $rowsi;
        }
        while($rowsq = mysqli_fetch_assoc($resultq)){
            $dataq[] = $rowsq;
        }
        $arr=array('tit'=>$datai,'list'=>$dataq);
        echo json_encode($arr);
    // }else{
    //     echo 'error';
    // }   
?>