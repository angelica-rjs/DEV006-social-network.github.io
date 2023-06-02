import { getAuth } from "firebase/auth";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from './lib/firebase.js';
import { header } from './contents.js';
import { borrarPublicacion, likePublicacion, dislikePublicacion, postData } from './lib/firestore.js';

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
  postData((querySnapshot) => {
    nodehome.innerHTML = '';
    const data = document.createElement('div');
    data.setAttribute('id', 'postData');
    querySnapshot.forEach((publicacion) => {
      // console.log('publicacion.id ', publicacion.id);

      // contenedor universal de la publicación
      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      containerPost.setAttribute('id', 'containerPostid');

      // current user
      const auth = getAuth();
      const user = auth.currentUser;

      if (publicacion.data().userId === user.uid) {
        // console.log(` user.id${user.uid}`);
        // console.log(` user.id${publicacion.data().userId}`);
        const option = document.createElement('button');
        option.setAttribute('class', 'option');
        option.innerHTML = '<img class="imgChef" src="./imagenes/option.png" >';
        containerPost.appendChild(option);
        
        
        const buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'buttonDelete');
        buttonDelete.innerHTML = 'borrar';
        buttonDelete.setAttribute('style', 'display:none');
        option.appendChild(buttonDelete);

        const buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'buttonEdit');
        buttonEdit.innerHTML = 'editar';
        buttonEdit.setAttribute('style', 'display:none');
        option.appendChild(buttonEdit);

        option.addEventListener('click', () => {
          const valideitorDelete = option.querySelector('.buttonDelete');
          if (valideitorDelete.style.display === 'none') {
            valideitorDelete.style.display = 'block';
          } else {
            valideitorDelete.style.display = 'none';
          }
          buttonDelete.addEventListener('click', () => {
            // console.log(`tenemosid?(JSON.stringifi()${postid})`);
            borrarPublicacion(publicacion.id);
          });
          const valideitorEdit = option.querySelector('.buttonEdit');
          if (valideitorEdit.style.display === 'none') {
            valideitorEdit.style.display = 'block';
          } else {
            valideitorEdit.style.display = 'none';
          }
          buttonEdit.addEventListener('click', () => {
            // borrarPublicacion(publicacion.id);
          });
        });

        buttonDelete.addEventListener('click', ()=>{
         // console.log(post.doc())
        })
      }
      const titlePublicacion = document.createElement('h2');
      titlePublicacion.setAttribute('class', 'titlePublicacion');
      titlePublicacion.innerHTML = publicacion.data().title;
      // console.log(`post fuera de todo${JSON.stringify(publicacion)}`);

      const descriptionPublicacion = document.createElement('p');
      descriptionPublicacion.setAttribute('class', 'descriptionPublicacion');
      descriptionPublicacion.innerHTML = publicacion.data().description;

      const containerLike = document.createElement('div');
      containerLike.setAttribute('class', 'containerLike');
      const contador = document.createElement('p');
      contador.setAttribute('class', 'contador');
      contador.innerHTML = publicacion.data().like;

      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('class', 'buttonLike');
      buttonLike.setAttribute('id', 'buttonLikeid1');


      buttonLike.innerHTML = '<img class="imgChef" src="./imagenes/chef.png" >';


      let isLiked = localStorage.getItem('isLiked') === 'true';

      buttonLike.addEventListener('click', () => {
        if (isLiked) {
          dislikePublicacion(publicacion.id);
          isLiked = false;
        } else {
          likePublicacion(publicacion.id);
          isLiked = true;
        }

        localStorage.setItem('isLiked', isLiked.toString());
      });


      containerLike.appendChild(buttonLike);
      containerLike.appendChild(contador);
      containerPost.appendChild(titlePublicacion);
      containerPost.appendChild(descriptionPublicacion);
      containerPost.appendChild(containerLike);

      data.appendChild(containerPost);
    });

    nodehome.appendChild(theHeader);
    nodehome.appendChild(data);
    nodehome.appendChild(contenedorMenu);
  });

  /*----------------------------------------------------*/

  const imagenPalta = document.createElement('img');
  imagenPalta.setAttribute('class', 'imagenPalta');
  imagenPalta.setAttribute('src', 'imagenes/paltamenu.png');
  botonPalta.appendChild(imagenPalta);
  contenedorMenu.appendChild(botonPalta);

  nodehome.appendChild(contenedorMenu);

  botonPalta.addEventListener('click', () => {
    // console.log('estamos en el addEvent');
    navigateTo('/post');
  });

  return nodehome;
}
