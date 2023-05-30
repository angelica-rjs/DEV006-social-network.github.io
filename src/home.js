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

  const data = document.createElement('div');
  data.setAttribute('id', 'postData');
  obtenerData().then(publicaciones => {  // obtener datos es una promesa de una funcion asincrona por lo tanto debe llevar el .then
    publicaciones.forEach ((publicacion) =>{
     
  const divPublicacion = document.createElement('div');

  const titlePublicacion = document.createElement('h2');
  titlePublicacion.innerHTML = publicacion.title; 

  const descriptionPublicacion = document.createElement('p');
  descriptionPublicacion.innerHTML = publicacion.description;

  divPublicacion.appendChild(titlePublicacion);
  divPublicacion.appendChild(descriptionPublicacion);
  data.appendChild(divPublicacion);
  data.appendChild(divPublicacion);
  
})
nodehome.appendChild(data);
});



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


