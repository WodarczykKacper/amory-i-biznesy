<?php
/* Smarty version 3.1.39, created on 2022-03-05 19:18:54
  from 'C:\xampp\htdocs\grawstepna\themes\classic\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_6223a98e76f8b5_54492316',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '09cf0ce5e4184229e0c0f4ef19aaf720efad0cb1' => 
    array (
      0 => 'C:\\xampp\\htdocs\\grawstepna\\themes\\classic\\templates\\index.tpl',
      1 => 1643096356,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6223a98e76f8b5_54492316 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, true);
?>


    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_10395045936223a98e76bdf1_88752451', 'page_content_container');
?>

<?php $_smarty_tpl->inheritance->endChild($_smarty_tpl, 'page.tpl');
}
/* {block 'page_content_top'} */
class Block_8685957126223a98e76c7c2_99280708 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
}
}
/* {/block 'page_content_top'} */
/* {block 'hook_home'} */
class Block_5135394546223a98e76da78_99564137 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

            <?php echo $_smarty_tpl->tpl_vars['HOOK_HOME']->value;?>

          <?php
}
}
/* {/block 'hook_home'} */
/* {block 'page_content'} */
class Block_14440712946223a98e76d3e1_09668769 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_5135394546223a98e76da78_99564137', 'hook_home', $this->tplIndex);
?>

        <?php
}
}
/* {/block 'page_content'} */
/* {block 'page_content_container'} */
class Block_10395045936223a98e76bdf1_88752451 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'page_content_container' => 
  array (
    0 => 'Block_10395045936223a98e76bdf1_88752451',
  ),
  'page_content_top' => 
  array (
    0 => 'Block_8685957126223a98e76c7c2_99280708',
  ),
  'page_content' => 
  array (
    0 => 'Block_14440712946223a98e76d3e1_09668769',
  ),
  'hook_home' => 
  array (
    0 => 'Block_5135394546223a98e76da78_99564137',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <section id="content" class="page-home">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_8685957126223a98e76c7c2_99280708', 'page_content_top', $this->tplIndex);
?>


        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_14440712946223a98e76d3e1_09668769', 'page_content', $this->tplIndex);
?>

      </section>
    <?php
}
}
/* {/block 'page_content_container'} */
}
