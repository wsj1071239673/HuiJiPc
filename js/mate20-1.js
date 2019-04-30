
    // 点击主图下的小图切换主图及小图遮罩层消失
    var arrImg=['images/jt/095.jpg','images/jt/096.jpg','images/jt/097.jpg','images/jt/098.jpg','images/jt/099.jpg'];   
    var small=document.querySelectorAll('.small-img-pic');
    var big=document.querySelector('.big-pic img')
    console.log(small.length);
    for(var i=0;i<small.length;i++){
        small[i].index=i;
        small[i].onmouseover=function(){
            small[this.index].children[1].style.display='none';
            big.src=arrImg[this.index];
        }
        small[i].onmouseout=function(){
            small[this.index].children[1].style.display='block';
        }
    }
  
    



