<?php
        include('use-simple.php');
        $computer=$_GET['computer'];
        $sql="select * from popu where type='{$computer}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>