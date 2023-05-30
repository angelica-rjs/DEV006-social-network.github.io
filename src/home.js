import { header } from './contents.js';
import { obtenerData } from './lib/firestore.js';


export function home(navigateTo) {
  
  const nodehome = document.createElement('div');
  const theHeader = header();
  nodehome.appendChild(theHeader);

  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu');

  const botonPalta = document.createElement('button');
  botonPalta.setAttribute('class', 'buttonPalta');
  botonPalta.setAttribute('id', 'palta');

  /*const publicaciones = obtenerData();
  const data = document.createElement('div')
  data.setAttribute('id', 'postData');
  const titlePublicacion = document.createElement('h2');
  titlePublicacion.innerHTML = `${publicaciones.title}`
  data.appendChild(titlePublicacion);
  nodehome.appendChild(data);*/
  


  const imagenPalta = document.createElement('img');
  imagenPalta.setAttribute('class', 'imagenPalta');
  imagenPalta.setAttribute('src', 'imagenes/paltamenu.png');
  botonPalta.appendChild(imagenPalta);
  contenedorMenu.appendChild(botonPalta);

  nodehome.appendChild(contenedorMenu);


  botonPalta.addEventListener('click', () => {
    console.log('estamos en el addEvent');
    navigateTo('/post');
  
  });

  return nodehome;
}


