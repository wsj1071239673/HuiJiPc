<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','rookie');
if($mysqli->connect_errno){
    die();
}
 $mysqli->set_charset('utf8');

 $time=$_GET['time'];
 $sql="select * from shouji where type='{$time}'";
 $result=$mysqli->query($sql);
 $num=$result->num_rows;
 if($num>0){
     while($row=$result->fetch_assoc()){
         $data[]=$row;
     }
 }

 echo json_encode($data);
?>