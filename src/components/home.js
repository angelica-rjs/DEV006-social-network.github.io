import { getAuth } from "firebase/auth";
import { header } from './contents.js';
import { borrarPublicacion, likePublicacion, dislikePublicacion, postData } from '../lib/firestore.js';
import { out } from "../lib/controlador.js";



export function home(navigateTo) {
  
  const nodehome = document.createElement('div');
  const theHeader = header();
  nodehome.appendChild(theHeader);

  // current user
  const auth = getAuth();
  const user = auth.currentUser;
  
  /* ------------------ DIV DE PUBLICACIONES ------------------*/
  postData((querySnapshot) => {
    nodehome.innerHTML = '';
    const data = document.createElement('div');
    data.setAttribute('id', 'postData');
    data.setAttribute('class', 'postData');
    querySnapshot.forEach((publicacion) => {
      // console.log('publicacion.id ', publicacion.id);

      // contenedor universal de la publicación
      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      containerPost.setAttribute('id', 'containerPostid');

      

      if (publicacion.data().userId === user.uid) {
        //boton 3 puntitus 
        const option = document.createElement('button');
        option.setAttribute('class', 'option');
        option.innerHTML = '<img class="imgDots" src="./imagenes/option.png" >';
        containerPost.appendChild(option);

        //contenedor para los botones 
        const contenedorBotones = document.createElement('div');
        contenedorBotones.setAttribute('class', 'contenedorBotones');
        contenedorBotones.setAttribute('style', 'display:none');
        option.appendChild(contenedorBotones);

        //boton borrar
        const buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'buttonDelete');
        buttonDelete.innerHTML = 'borrar';
        buttonDelete.setAttribute('style', 'display:none');
        contenedorBotones.appendChild(buttonDelete);



        //boton editar        
        const buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'buttonEdit');
        buttonEdit.innerHTML = 'editar';
        buttonEdit.setAttribute('style', 'display:none');
        contenedorBotones.appendChild(buttonEdit);


        option.addEventListener('click', () => {
          console.log ("estoy en el option")

          //valida el contenedor de los botones
          const valideitorBotones = option.querySelector('.contenedorBotones');
          if (valideitorBotones.style.display === 'none') {
            valideitorBotones.style.display = 'block';
          } else {
            valideitorBotones.style.display = 'none';
          }
          buttonEdit.addEventListener('click', () => {
            console.log("estoy en edit")
            valideitorBotones.style.display = 'block';
          });
        });

        //validaciones delete
        const valideitorBotonDelete = option.querySelector('.buttonDelete');
          if (valideitorBotonDelete.style.display === 'none') {
            valideitorBotonDelete.style.display = 'block';
          } else {
            valideitorBotonDelete.style.display = 'none';
          }
          //delete 
          buttonDelete.addEventListener('click', () => {
            const modalDelete = document.createElement('div');
            modalDelete.setAttribute('class', 'modalDelete');
       

            const confirmation = document.createElement('p');
            confirmation.innerHTML = '¿Esta seguro que desea eliminar la publicación?';
            confirmation.setAttribute('class', 'pModal');
            modalDelete.appendChild(confirmation);

            const buttonConfirmar = document.createElement('button');
            buttonConfirmar.setAttribute('class', 'buttonConfirmar');
            buttonConfirmar.innerHTML = 'SI'
            modalDelete.appendChild(buttonConfirmar);

            const buttonNo = document.createElement('button');
            buttonNo.setAttribute('class', 'buttonConfirmar');
            buttonNo.innerHTML = 'NO'
            modalDelete.appendChild(buttonNo);
            nodehome.appendChild(modalDelete);
          

            buttonConfirmar.addEventListener('click', () => {
              borrarPublicacion(publicacion.id);
            })

            buttonNo.addEventListener('click', () => {
              navigateTo('/home');
            })
          });



          //validaciones edit 
          const valideitorEdit = option.querySelector('.buttonEdit');
          if (valideitorEdit.style.display === 'none') {
            valideitorEdit.style.display = 'block';
          } else {
            valideitorEdit.style.display = 'none';
          }
         
      }


      const titlePublicacion = document.createElement('h2');
      titlePublicacion.setAttribute('class', 'titlePublicacion');
      titlePublicacion.innerHTML = publicacion.data().title;

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
      buttonLike.setAttribute('id', `${publicacion.data().id}`);

      buttonLike.innerHTML = '<img class="imgChef" src="./imagenes/chef.png" >';

      let isLiked = localStorage.getItem(`isLiked_${publicacion.id}`) === 'true';

      buttonLike.addEventListener('click', () => {
        if (isLiked) {
          dislikePublicacion(publicacion.id);
          isLiked = false;
        } else {
          likePublicacion(publicacion.id);
          isLiked = true;
        }

        localStorage.setItem(`isLiked_${publicacion.id}`, isLiked.toString());
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

  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu');

  const botonPalta = document.createElement('button');
  botonPalta.setAttribute('class', 'buttonPalta');
  botonPalta.setAttribute('id', 'palta');
  const imagenPalta = document.createElement('img');
  imagenPalta.setAttribute('class', 'imagenPalta');
  imagenPalta.setAttribute('src', 'imagenes/paltamenu.png');
  botonPalta.appendChild(imagenPalta);
  




  const logOut = document.createElement('button');
  logOut.setAttribute('class', 'logOut');
  const imgLogOut = document.createElement('img')
  imgLogOut.setAttribute('class', 'imaLogOut');
  imgLogOut.setAttribute('src', 'imagenes/cerrar-sesion.png');
  logOut.appendChild(imgLogOut);

  contenedorMenu.appendChild(logOut);
  contenedorMenu.appendChild(botonPalta);
  nodehome.appendChild(contenedorMenu);

  botonPalta.addEventListener('click', () => {
    // console.log('estamos en el addEvent');
    navigateTo('/post');
  });

  logOut.addEventListener('click', () => {
    const modalDelete = document.createElement('div');
    modalDelete.setAttribute('class', 'modalDelete');
  
    const confirmation = document.createElement('p');
    confirmation.innerHTML = '¿Esta seguro que desea cerrar sesión?';
    confirmation.setAttribute('class', 'pCerrarSesion');
    modalDelete.appendChild(confirmation);
  
    const buttonConfirmar = document.createElement('button');
    buttonConfirmar.setAttribute('class', 'buttonConfirmar');
    buttonConfirmar.innerHTML = 'SI'
    modalDelete.appendChild(buttonConfirmar);
  
    const buttonNo = document.createElement('button');
    buttonNo.setAttribute('class', 'buttonConfirmar');
    buttonNo.innerHTML = 'NO'
    modalDelete.appendChild(buttonNo);
    nodehome.appendChild(modalDelete);


    buttonConfirmar.addEventListener('click', () => {
      const auth = getAuth();
      out(auth)
    })
     
    buttonNo.addEventListener('click', () => {
      navigateTo('/home');
    })
  })

  return nodehome;
}

