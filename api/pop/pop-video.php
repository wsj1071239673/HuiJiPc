<?php
        include('use-simple.php');
        $video=$_GET['video'];
        $sql="select * from popu where type='{$video}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>