import { getAuth } from "firebase/auth";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from './lib/firebase.js';
import { header } from './contents.js';
import { borrarPublicacion, postData } from './lib/firestore.js';

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
      console.log('ultimo console', publicacion.id);

      // validacion para el boton de borrar

      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      containerPost.setAttribute('id', 'containerPostid');

      // validacion para el boton de borrar
      const auth = getAuth();
      const user = auth.currentUser;

      if (publicacion.data().userId === user.uid) {
        console.log(` user.id${user.uid}`);
        console.log(` user.id${publicacion.data().userId}`);
        const option = document.createElement('button');
        option.setAttribute('class', 'option');
        option.innerHTML = '<img class="imgChef" src="./imagenes/option.png" >';
        containerPost.appendChild(option);

        // let postid = getDocs(collection(db, 'post'));
        // console.log(`aqui tenemos postid?${postid}`);
        // postid = post.id;
        // console.log(`post.id${publicacion.id}`);
        const buttonDelete = document.createElement('button');
        // buttonDelete.setAttribute('id', `${postid.id}`);
        buttonDelete.setAttribute('class', 'buttonDelete');
        buttonDelete.innerHTML = 'borrar';
        buttonDelete.setAttribute('style', 'display:none');
        option.appendChild(buttonDelete);

        option.addEventListener('click', () => {
          const valideitor = option.querySelector('.buttonDelete');
          if (valideitor.style.display === 'none') {
            valideitor.style.display = 'block';
          } else {
            valideitor.style.display = 'none';
          }
        });
        buttonDelete.addEventListener('click', () => {
          // console.log(`tenemosid?(JSON.stringifi()${postid})`);
          // console.log(JSON.stringify(postid));
          // const vamoABorrarTodo = document.getElementById('buttonDelete');
          borrarPublicacion(publicacion.id);
        });
      }

      const titlePublicacion = document.createElement('h2');
      titlePublicacion.setAttribute('class', 'titlePublicacion');

      titlePublicacion.innerHTML = publicacion.data().title;
      // console.log(`post fuera de todo${JSON.stringify(publicacion)}`);

      const descriptionPublicacion = document.createElement('p');
      descriptionPublicacion.setAttribute('class', 'descriptionPublicacion');
      descriptionPublicacion.innerHTML = publicacion.data().description;
      // like //cambios para clai
      const containerLike = document.createElement('div');
      containerLike.setAttribute('class', 'containerLike');
      const contador = document.createElement('p');
      contador.setAttribute('class', 'contador');
      contador.innerHTML = '0';
      const buttonLike = document.createElement('button');
      buttonLike.setAttribute('class', 'buttonLike');
      buttonLike.innerHTML = '<img class="imgChef" src="./imagenes/chef.png" >';

      containerLike.appendChild(buttonLike);
      containerLike.appendChild(contador);
      containerPost.appendChild(titlePublicacion);
      containerPost.appendChild(descriptionPublicacion);
      containerPost.appendChild(containerLike);

      // data.appendChild(containerPost);
      data.appendChild(containerPost);
    });
    nodehome.innerHTML = '';
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
    console.log('estamos en el addEvent');
    navigateTo('/post');
  });

  return nodehome;
}
