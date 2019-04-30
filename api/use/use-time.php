<?php
        include('use-simple.php');
        $kind=$_GET['kind'];
        $sql="select * from used where type='{$kind}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>