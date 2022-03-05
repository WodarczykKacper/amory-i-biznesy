<?php
/* Smarty version 3.1.39, created on 2022-03-05 20:28:19
  from 'C:\xampp\htdocs\grawstepna\themes\justidea-theme\templates\catalog\_partials\product-flags.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_6223b9d3af4778_51649546',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b77b730371bde8c5e4c500f7ec3a0721c384ec5f' => 
    array (
      0 => 'C:\\xampp\\htdocs\\grawstepna\\themes\\justidea-theme\\templates\\catalog\\_partials\\product-flags.tpl',
      1 => 1643096356,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6223b9d3af4778_51649546 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, false);
$_smarty_tpl->compiled->nocache_hash = '16483324466223b9d3aefd70_51674638';
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_14344029506223b9d3af1aa1_25692952', 'product_flags');
?>

<?php }
/* {block 'product_flags'} */
class Block_14344029506223b9d3af1aa1_25692952 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'product_flags' => 
  array (
    0 => 'Block_14344029506223b9d3af1aa1_25692952',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

    <ul class="product-flags js-product-flags">
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['product']->value['flags'], 'flag');
$_smarty_tpl->tpl_vars['flag']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['flag']->value) {
$_smarty_tpl->tpl_vars['flag']->do_else = false;
?>
            <li class="product-flag <?php echo htmlspecialchars($_smarty_tpl->tpl_vars['flag']->value['type'], ENT_QUOTES, 'UTF-8');?>
"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['flag']->value['label'], ENT_QUOTES, 'UTF-8');?>
</li>
        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
    </ul>
<?php
}
}
/* {/block 'product_flags'} */
}
