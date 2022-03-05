<?php
/* Smarty version 3.1.39, created on 2022-03-05 20:08:24
  from 'C:\xampp\htdocs\grawstepna\themes\classic\templates\_partials\helpers.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.39',
  'unifunc' => 'content_6223b528962bc1_54428616',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a6ca87988c6b13c97034b2fd5a8bf3b0bd197d5d' => 
    array (
      0 => 'C:\\xampp\\htdocs\\grawstepna\\themes\\classic\\templates\\_partials\\helpers.tpl',
      1 => 1643096356,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6223b528962bc1_54428616 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->smarty->ext->_tplFunction->registerTplFunctions($_smarty_tpl, array (
  'renderLogo' => 
  array (
    'compiled_filepath' => 'C:\\xampp\\htdocs\\grawstepna\\var\\cache\\prod\\smarty\\compile\\classiclayouts_layout_full_width_tpl\\a6\\ca\\87\\a6ca87988c6b13c97034b2fd5a8bf3b0bd197d5d_2.file.helpers.tpl.php',
    'uid' => 'a6ca87988c6b13c97034b2fd5a8bf3b0bd197d5d',
    'call_name' => 'smarty_template_function_renderLogo_9068954626223b52895ad21_15369048',
  ),
));
?> 

<?php }
/* smarty_template_function_renderLogo_9068954626223b52895ad21_15369048 */
if (!function_exists('smarty_template_function_renderLogo_9068954626223b52895ad21_15369048')) {
function smarty_template_function_renderLogo_9068954626223b52895ad21_15369048(Smarty_Internal_Template $_smarty_tpl,$params) {
foreach ($params as $key => $value) {
$_smarty_tpl->tpl_vars[$key] = new Smarty_Variable($value, $_smarty_tpl->isRenderingCache);
}
?>

  <a href="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['urls']->value['pages']['index'], ENT_QUOTES, 'UTF-8');?>
">
    <img
      class="logo img-fluid"
      src="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo_details']['src'], ENT_QUOTES, 'UTF-8');?>
"
      alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['name'], ENT_QUOTES, 'UTF-8');?>
"
      width="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo_details']['width'], ENT_QUOTES, 'UTF-8');?>
"
      height="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['shop']->value['logo_details']['height'], ENT_QUOTES, 'UTF-8');?>
">
  </a>
<?php
}}
/*/ smarty_template_function_renderLogo_9068954626223b52895ad21_15369048 */
}
