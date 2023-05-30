import { header } from './contents.js';
import { obtenerData, obtenerData2 } from './lib/firestore.js';


export function home(navigateTo) {
  
  const nodehome = document.createElement('div');
  const theHeader = header();
  nodehome.appendChild(theHeader);

  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu');

  const botonPalta = document.createElement('button');
  botonPalta.setAttribute('class', 'buttonPalta');
  botonPalta.setAttribute('id', 'palta');

/* ------------------ DIV DE PUBLICACIONES ------------------*/ 
function mostrarpost(posts){
  console.log("ultimo console",posts)
  const data = document.createElement('div');
  data.setAttribute('id', 'postData');
  posts.forEach ((post) =>{
     
  const  containerPost= document.createElement('div');
  containerPost.setAttribute("class", "containerPost")

  const titlePublicacion = document.createElement('h2');
  titlePublicacion.setAttribute("class" , "titlePublicacion")
  
  titlePublicacion.innerHTML = post.title; 

  const descriptionPublicacion = document.createElement('p');
  descriptionPublicacion.setAttribute("class" , "descriptionPublicacion")
  descriptionPublicacion.innerHTML = post.description;

  containerPost.appendChild(titlePublicacion);
  containerPost.appendChild(descriptionPublicacion);
  data.appendChild(containerPost);
  data.appendChild(containerPost);
  
})
nodehome.appendChild(data);
  

} 
obtenerData2(mostrarpost)

 /* const data = document.createElement('div');
  data.setAttribute('id', 'postData');
  obtenerData().then(publicaciones => { 
    console.log(publicaciones, "del home") // obtener datos es una promesa de una funcion asincrona por lo tanto debe llevar el .then
    
});*/

/*----------------------------------------------------*/


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


