<?php
        include('use-simple.php');
        $phone=$_GET['phone'];
        $sql="select * from popu where type='{$phone}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>