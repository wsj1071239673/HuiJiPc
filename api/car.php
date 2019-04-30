<?php
include("../inc/dbconn.php");
 $code = $_GET['code'];
$sql = "insert into shopCar num values $code";
$resule = $conn->query($sql);
$affect = $resulted->affected_rows;
if($conn->affected_rows){
    echo "加入成功";
}else{
    echo "加入失败";
}
?>