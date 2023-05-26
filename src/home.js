import { header } from './contents.js';
import { modal } from './modal.js';

export function home(navigateTo) {
  const nodehome = document.createElement('div');
  const theHeader = header();
  nodehome.appendChild(theHeader);

  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu');

  const botonPalta = document.createElement('button');
  botonPalta.setAttribute('class', 'buttonPalta');
  botonPalta.setAttribute('id', 'palta');

  const imagenPalta = document.createElement('img');
  imagenPalta.setAttribute('class', 'imagenPalta');
  imagenPalta.setAttribute('src', 'imagenes/paltamenu.png');
  botonPalta.appendChild(imagenPalta);
  contenedorMenu.appendChild(botonPalta);

  nodehome.appendChild(contenedorMenu);

  botonPalta.addEventListener('click', () => {
    console.log('estamos en el addEvent');
    const modalElement = modal();
    nodehome.appendChild(modalElement);
  });

  return nodehome;
}
