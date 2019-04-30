<?php
header("content-type:text/html;charset=utf-8");
$mysqli = new mysqli('localhost','root','root','saleafter');
if($mysqli->connect_errno){
    die();
}
include("init.inc.php");
$sql="select * from children2 order by Id desc limit 0,1";
$result = $mysqli->query($sql);
if($result->num_rows>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}
$smarty->assign('play',$data);
$smarty->display('sale-problem.html');