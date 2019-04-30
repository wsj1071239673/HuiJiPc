<?php
        include('use-simple.php');
        $mess=$_GET['mess'];
        $sql="select * from usedmess where type='{$mess}'";
        $result=$mysqli->query($sql);
        $num=$result->num_rows;
        if($num>0){
            while($row=$result->fetch_assoc()){
                $data[]=$row;
        }
}
        echo json_encode($data);
?>