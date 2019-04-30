<?php
/* Smarty version 3.1.30, created on 2018-12-19 22:05:10
  from "E:\www\1219-smart -1\templates\scrollLost.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c1a5016dc1e96_77767310',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2b961bec24f2af2bbdaeec1e8d873763a3e50d21' => 
    array (
      0 => 'E:\\www\\1219-smart -1\\templates\\scrollLost.html',
      1 => 1545228212,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1a5016dc1e96_77767310 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/scrollLost.css">
</head>
<body>
    <div class="header">1111111111</div>
    <div class="list">
        <ul class="item clearfix">
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['list']->value, 'val', false, 'index');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['index']->value => $_smarty_tpl->tpl_vars['val']->value) {
?>
            <li>
                <a href="#">
                    <p>书名：<?php echo $_smarty_tpl->tpl_vars['val']->value["bookName"];?>
</p>
                    <p>书名：<?php echo $_smarty_tpl->tpl_vars['val']->value["author"];?>
</p>
                    <p>书名：<?php echo $_smarty_tpl->tpl_vars['val']->value["brief"];?>
</p>
                    <p>书名：<?php echo $_smarty_tpl->tpl_vars['val']->value["price"];?>
</p>
                </a>
            </li>
           <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>
 
        </ul>
    </div>
</body>
<?php echo '<script'; ?>
 src="js/scrollLost.js"><?php echo '</script'; ?>
>
</html><?php }
}
