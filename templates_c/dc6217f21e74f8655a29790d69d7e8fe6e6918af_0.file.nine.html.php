<?php
/* Smarty version 3.1.30, created on 2019-01-14 20:11:31
  from "D:\xiangmujiazai zhujuku\templates\nine.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c3c7c73b8e762_87482422',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dc6217f21e74f8655a29790d69d7e8fe6e6918af' => 
    array (
      0 => 'D:\\xiangmujiazai zhujuku\\templates\\nine.html',
      1 => 1547467837,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c3c7c73b8e762_87482422 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php echo '<script'; ?>
 src="js/jquery-1.8.3.min.js"><?php echo '</script'; ?>
>
    <link rel="stylesheet" href="css/nine.css">
    <title>Document</title>
</head>
<body>
    <!-- 九机头条开始 -->
    <div class="box-wrapper">
        <!-- 轮播图开始 -->
        <div class="wrapper ">
            <ul class="img-banner-box ">
                <li class="img-banner-big-img">
                    <a href="#">
                        <img src="images/jt/023.jpg" alt="">
                    </a>
                    <p>10万锦鲤诞生|和您分享2019第一份坚持和相信</p>
                </li>
                <li class="img-banner-big-img">
                    <a href="#">
                        <img src="images/jt/024.png" alt="">
                    </a>
                    <p>荣耀V20新品发布，2999起售！</p>
                </li>
                <li class="img-banner-big-img">
                    <a href="#">
                        <img src="images/jt/022.png" alt="">
                    </a>
                    <p>小米Play新品发布，自带流量，1099元起售！</p>
                </li>
                <li class="img-banner-big-img">
                    <a href="#">
                        <img src="images/jt/021.png" alt="">
                    </a>
                    <p>3099元起，华为nova4发布！</p>
                </li>
                
            </ul>
            <div class="img-banner-left"></div>
            <div class="img-banner-right"></div>
           
            <!-- 轮播图鼠标移动事件开始 -->
            <div class="img-banner-small-img">
                <ul class="img-banner-small-box clearfix">
                    <li>
                        <a href="#">
                            <img src="images/jt/023.jpg" alt="">
                        </a>
                        <span class="img-banner-sp"></span>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/jt/024.png" alt="">
                        </a>
                        <span class="img-banner-sp"></span>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/jt/022.png" alt="">
                        </a>
                        <span class="img-banner-sp"></span>
                    </li>
                    <li>
                        <a href="#">
                            <img src="images/jt/021.png" alt="">
                        </a>
                        <span class="img-banner-sp"></span>
                    </li>
                </ul>
            </div>
            <!-- 轮播图鼠标移动事件结束 -->
        </div>
    </div> 
    <!-- 轮播图结束 -->
    <!-- 最新资讯开始 -->
    <div class="content">
       <div class="title">
           <h3><b>最新资讯</b></h3>
           
       </div>
       <div class="list">
           <ul class="list-left">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['list']->value, 'val', false, 'index');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['index']->value => $_smarty_tpl->tpl_vars['val']->value) {
?>
               <li class="item">
                   <div class="item-dt clearfix">
                       <img src="<?php echo $_smarty_tpl->tpl_vars['val']->value['imag'];?>
" alt="">
                       <p>
                           <span><?php echo $_smarty_tpl->tpl_vars['val']->value["user"];?>
</span>
                           <span class="sp"><?php echo $_smarty_tpl->tpl_vars['val']->value["time"];?>
</span> 
                       </p>
                   </div>
                   <div class="item-img">
                       <img src="<?php echo $_smarty_tpl->tpl_vars['val']->value['img'];?>
" alt="">
                   </div>
                   <div class="item-bottom">
                        <div class="item-dl">   
                            <h3><?php echo $_smarty_tpl->tpl_vars['val']->value["title"];?>
</h1>
                            <p><?php echo $_smarty_tpl->tpl_vars['val']->value["brife"];?>
</p>
                        </div>
                        <div class="btn">
                            <a href="#" class="left">
                                <i class="pce"></i>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value["pce"];?>

                            </a>
                            <span>
                                <i class="views"></i>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value["views"];?>

                            </span>
                            <a href="#">
                                <i class="zan">
                                </i>
                                <span><?php echo $_smarty_tpl->tpl_vars['val']->value["zan"];?>
</span>
                            </a>
                            <a href="#">
                                <i class="com"> </i>
                                <span><?php echo $_smarty_tpl->tpl_vars['val']->value["con"];?>
</span>
                            </a>
                        </div>
                   </div>
               </li>
               <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

           </ul>
           <!-- 最新资讯结束 -->
           <!-- 右侧专属分类开始 -->
           <div class="list-right">
               <div class="brand-detail">
                   <h2>专题分类</h2>
                   <div class="pro-detail">
                       <ul>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>苹果</span>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>华为</span>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>小米</span>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>魅族</span>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>Android</span>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <i></i>
                                   <span>三星</span>
                               </a>
                           </li>
                       </ul>
                   </div>
               </div>
               <!-- 右侧专属分类结束 -->
               <!-- 右侧资讯目录开始 -->
               <div class="new-meau">
                   <h2>咨询目录</h2>
                   <ul>
                       <li>
                           <a href="#">
                               <i class="gg"></i>
                               <span>公告</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i class="pc"></i>
                               <span>评测</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i class="dg"></i>
                               <span>导购</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i class="zx"></i>
                               <span>咨询</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i class="sp"></i>
                               <span>视频</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i class="wd"></i>
                               <span>问答</span>
                           </a>
                       </li>
                   </ul>
               </div>
               <!-- 右侧资讯目录结束-->
               <!-- 右侧小九精选开始-->
               <div class="hot-sider">
                   <h3>小九精选</h3>
                   <div class="hot-img">
                       <a href="#">
                           <i class="lb"></i>
                       </a>
                       <p class="ceng">
                           OPPO Find X 兰博基尼版图赏
                       </p>
                   </div>
                   <div class="hot-img">
                       <a href="#">
                           <i class="qs"></i>
                       </a>
                       <p class="ceng">
                           OPPO Find X 诠释新科技美学
                       </p>
                   </div>
                   <div class="hot-img">
                       <a href="#">
                           <i class="jj"></i>
                       </a>
                       <p class="ceng">
                           为竞技而生，解锁手游黑科技-黑鲨
                       </p>
                   </div>
               </div>
               <!-- 右侧小九精选结束-->
               <!-- 关注我们开始 -->
               <div class="follow-sider">
                   <h3>关注我们</h3>
                   <div class="follow-box"></div>
               </div>
               <!-- 关注我们结束 -->
           </div>
       </div>
   </div>
   <!-- 右侧专属分类结束 -->
</body>
<?php echo '<script'; ?>
 src='js/nine.js'><?php echo '</script'; ?>
>
</html><?php }
}
