jQuery(document).on('ready', function () {
  let expanded = [];
  
  jQuery('#top-menu>li>a.dropdown-item .collapse-icons').on('click',function(e) {
      const topMenu = document.querySelector('#top-menu')
      const submenus = document.querySelectorAll('#top-menu>li>.sub-menu')
      topMenu.classList.remove('submenu-expanded')
      submenus.forEach(submenu => submenu.parentElement.classList.remove('submenu-active'))
      setTimeout(()=> {
        for (i = 0; i < submenus.length; i++) {
          if (submenus[i].getAttribute('aria-expanded') == "true") {
            submenus[i].parentElement.classList.add('submenu-active')
            expanded[i] = true;
          } else {
            submenus[i].parentElement.classList.remove('submenu-active')
            expanded[i] = false;
          }
        }
        const opened = expanded.find(item => item);
        if(opened) {
          topMenu.classList.add('submenu-expanded')
        } else {
          topMenu.classList.remove('submenu-expanded')
        }
      }, 30)
  })
})