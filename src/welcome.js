import { mostrarLogo } from "./contents";

export function welcome(navigateTo){
    mostrarLogo();
    // Parrafo Felicidades
    const congratulation = document.createElement('div');
    congratulation.classList = 'congratulation';
    congratulation.innerHTML = '<h1> ¡Felicidades! </h1>';
    contenedorUniversal.appendChild(congratulation);
    // Parrafo descrpción bienvenida
    const welcome = document.createElement('div');
    welcome.classList = 'welcome';
    welcome.innerHTML =  ` <p> Ahora ya eres parte de nuestra comunidad keto, podras compartir y encontrar nuevas recetas.<br><br>Recuerda interactuar con los demas ketoAmigos. </p> `;
    contenedorUniversal.appendChild(welcome);
    const imgLike = document.createElement('div');
    imgLike.classList = 'imgLike';
    imgLike.innerHTML = '<img src="imagenes/likePublica.png">';
    contenedorUniversal.appendChild(imgLike);
    // Botón comenzar
    const buttonComenzar = document.createElement('div');
    buttonComenzar.classList = 'divBotonVista4';
    buttonComenzar.innerHTML = '<button class="botonesIniciales" type="button">COMENZAR</button>'
    contenedorUniversal.appendChild(buttonComenzar);
  }
  
  export default welcome;