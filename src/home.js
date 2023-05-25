import { header, contenedorMenu, buttonPalta } from './contents.js';

export function home(navigateTo) {
  const nodehome = document.createElement('div');
  const theHeader = header();
  nodehome.appendChild(theHeader);
  
  const menuHome = '';
  menuHome.innerHTML = contenedorMenu;
  nodehome.appendChild(menuHome);

  const menuPalta = document.createElement('button')
  menuPalta.innerHTML = buttonPalta
  nodehome.appendChild(menuPalta);
  

 


  return nodehome;
}


  /*buttonPalta.addEventListener('click', () => {
    navigateTo('/welcome');
  });*/