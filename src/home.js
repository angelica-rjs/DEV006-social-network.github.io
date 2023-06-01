import { getAuth } from "firebase/auth";
import { doc } from "firebase/firestore";
import { header } from './contents.js';
import { obtenerData2, borrarPublicacion } from './lib/firestore.js';

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
  function mostrarpost(posts) {
    console.log('ultimo console', posts);
    const data = document.createElement('div');
    data.setAttribute('id', 'postData');

    posts.forEach((post) => {
      // validacion para el boton de borrar

      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      containerPost.setAttribute('id', 'containerPostid');

      // validacion para el boton de borrar
      const auth = getAuth();
      const user = auth.currentUser;
        
      
      if (post.userId === user.uid) {
        const option = document.createElement('button');

      
        option.setAttribute('class', 'option');
        option.innerHTML = '<img class="imgChef" src="./imagenes/option.png" >';
        containerPost.appendChild(option);

        const postid = doc.id;
        console.log(`aqui tenemos postid?${postid}`);
        // postid.id = doc.id;
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
          // const vamoABorrarTodo = document.getElementById('buttonDelete');
          borrarPublicacion(postid);
        });
      }

      const titlePublicacion = document.createElement('h2');
      titlePublicacion.setAttribute('class', 'titlePublicacion');

      titlePublicacion.innerHTML = post.title;

      const descriptionPublicacion = document.createElement('p');
      descriptionPublicacion.setAttribute('class', 'descriptionPublicacion');
      descriptionPublicacion.innerHTML = post.description;
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
  }
  obtenerData2(mostrarpost);

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
