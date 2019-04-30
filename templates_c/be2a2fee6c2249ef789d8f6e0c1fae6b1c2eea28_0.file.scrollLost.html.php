<?php
/* Smarty version 3.1.30, created on 2018-12-27 13:28:12
  from "E:\000000000000-www\12-19-smart -2\templates\scrollLost.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c2462ec9f19a2_86504234',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'be2a2fee6c2249ef789d8f6e0c1fae6b1c2eea28' => 
    array (
      0 => 'E:\\000000000000-www\\12-19-smart -2\\templates\\scrollLost.html',
      1 => 1545228214,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c2462ec9f19a2_86504234 (Smarty_Internal_Template $_smarty_tpl) {
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
