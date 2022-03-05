<?php
/* Smarty version 3.1.39, created on 2022-03-05 20:28:19
  from 'C:\xampp\htdocs\grawstepna\themes\justidea-theme\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_6223b9d3cc4c38_91440190',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0e361a8ab37da61a42ac88cc69cd2e3208e40915' => 
    array (
      0 => 'C:\\xampp\\htdocs\\grawstepna\\themes\\justidea-theme\\templates\\index.tpl',
      1 => 1643096356,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6223b9d3cc4c38_91440190 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_loadInheritance();
$_smarty_tpl->inheritance->init($_smarty_tpl, true);
?>


    <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_15493132496223b9d3cc2457_50469964', 'page_content_container');
?>

<?php $_smarty_tpl->inheritance->endChild($_smarty_tpl, 'page.tpl');
}
/* {block 'page_content_top'} */
class Block_8292029366223b9d3cc2a16_21223141 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
}
}
/* {/block 'page_content_top'} */
/* {block 'hook_home'} */
class Block_16744618286223b9d3cc3746_60531613 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

            <?php echo $_smarty_tpl->tpl_vars['HOOK_HOME']->value;?>

          <?php
}
}
/* {/block 'hook_home'} */
/* {block 'page_content'} */
class Block_7787915816223b9d3cc3269_00650442 extends Smarty_Internal_Block
{
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

          <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_16744618286223b9d3cc3746_60531613', 'hook_home', $this->tplIndex);
?>

        <?php
}
}
/* {/block 'page_content'} */
/* {block 'page_content_container'} */
class Block_15493132496223b9d3cc2457_50469964 extends Smarty_Internal_Block
{
public $subBlocks = array (
  'page_content_container' => 
  array (
    0 => 'Block_15493132496223b9d3cc2457_50469964',
  ),
  'page_content_top' => 
  array (
    0 => 'Block_8292029366223b9d3cc2a16_21223141',
  ),
  'page_content' => 
  array (
    0 => 'Block_7787915816223b9d3cc3269_00650442',
  ),
  'hook_home' => 
  array (
    0 => 'Block_16744618286223b9d3cc3746_60531613',
  ),
);
public function callBlock(Smarty_Internal_Template $_smarty_tpl) {
?>

      <section id="content" class="page-home">
        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_8292029366223b9d3cc2a16_21223141', 'page_content_top', $this->tplIndex);
?>


        <?php 
$_smarty_tpl->inheritance->instanceBlock($_smarty_tpl, 'Block_7787915816223b9d3cc3269_00650442', 'page_content', $this->tplIndex);
?>

      </section>
    <?php
}
}
/* {/block 'page_content_container'} */
}
