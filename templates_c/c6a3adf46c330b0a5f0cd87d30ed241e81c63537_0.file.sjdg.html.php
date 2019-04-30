<?php
/* Smarty version 3.1.30, created on 2019-01-14 19:48:28
  from "D:\xiangmujiazai zhujuku\sjdg\templates\sjdg.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c3c770cd9d6e6_18228987',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c6a3adf46c330b0a5f0cd87d30ed241e81c63537' => 
    array (
      0 => 'D:\\xiangmujiazai zhujuku\\sjdg\\templates\\sjdg.html',
      1 => 1547466285,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c3c770cd9d6e6_18228987 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <?php echo '<script'; ?>
 src="js/jquery-1.8.3.min.js"><?php echo '</script'; ?>
>
    <link rel="stylesheet" href="css/new.css">
</head>
<body>
   
    <div class="content">
         <!-- 左侧新品评测开始-->
        <div class="title">
            <span>位置：</span>
            <a href="#">首页</a>
            <span>></span>
            <a href="#">九机资讯</a>
            <span>></span>
            <a href="#">产品导购</a>
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
                            <span>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value["zan"];?>

                            </span>
                            
                        </a>
                        <a href="#">
                            <i class="com"> </i>
                            <span>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value["con"];?>

                            </span>
                        </a>
                    </div>
                </li>
                <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>
 
            </ul>
            <!-- 左侧新品评测结束 -->
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
 src='js/sjdg.js'><?php echo '</script'; ?>
>
</html><?php }
}
