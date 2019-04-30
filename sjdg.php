<?php
include("inc/dbconn.php");
include("init.inc.php");
$sql="select * from pingce order by Id desc limit 0,2";
$result = $conn->query($sql);
if($result->num_rows>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}
$smarty->assign('list',$data);
$smarty->display('sjdg.html');