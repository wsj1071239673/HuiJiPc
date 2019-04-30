<?php
        include('use-simple.php');
        $device=$_GET['device'];
        $sql="select * from popu where type='{$device}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>