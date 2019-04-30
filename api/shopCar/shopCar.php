<?php
        include('use-simple.php');
        $type=$_GET['type'];
        $cookie=$_GET['cookie'];
        if($type==0){
                $sql="select * from shopCar where user='{$cookie}'";
                $result=$mysqli->query($sql);
                $num=$result->num_rows;
                if($num>0){
                    while($row=$result->fetch_assoc()){
                        $data[]=$row;
                }
              }
                echo json_encode($data);
        }else if($type==1){
                echo '1';
                $listid=$_GET['listid'];
                $numa=$_GET['numa'];
                $sql="update shopcar set num='{$numa}' where user='{$cookie}' and listid='{$listid}'";
                $result=$mysqli->query($sql);
        }else if($type==2){
                $listid=$_GET['listid'];
                // $numa=$_GET['numa'];
                $sql="delete from shopcar where user='{$cookie}' and listid='{$listid}'";
                $result=$mysqli->query($sql);
        }else if($type==3){
                $listid=$_GET['listid'];
                $price=$_GET['price'];
                $name=$_GET['name'];
                $src=$_GET['src'];
                $sql="select * from shopCar where listid='{$listid}'";
                $result=$mysqli->query($sql);
                $num=$result->num_rows;
                if($num>0){
                        $row=$result->fetch_assoc();
                        $num2=$row['num']+1;
                        $sql="update shopcar set num='{$num2}' where user='{$cookie}' and listid='{$listid}'";
                        $result=$mysqli->query($sql);
                }else{
                        $sql="insert into shopcar(carsrc,carname,price,listid,user,num) values('{$src}','{$name}','{$price}','{$listid}','{$cookie}',1)";
                        $result=$mysqli->query($sql);
                }
                
        }
        
?>