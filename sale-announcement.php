<?php
header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli('localhost','root','root','saleafter');
if($mysqli->connect_errno){
    die();
}
include("init.inc.php");
$sql="select * from children1 order by Id desc limit 0,1";
$result = $mysqli->query($sql);
if($result->num_rows>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}
$smarty->assign('news',$data);
$smarty->display('sale-announcement.html');