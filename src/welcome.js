import { mostrarLogo } from "./contents";

export function welcome(navigateTo){
  const welcome = document.createElement('div')
  const logo = mostrarLogo();
  welcome.appendChild(logo);
    // Parrafo Felicidades
    const congratulation = document.createElement('div');
    congratulation.classList = 'congratulation';
    congratulation.innerHTML = '<h1> ¡Felicidades! </h1>';
    welcome.appendChild(congratulation);
    // Parrafo descrpción bienvenida
    const bienvenida = document.createElement('div');
    bienvenida.classList = 'welcome';
    bienvenida.innerHTML =  ` <p> Ahora ya eres parte de nuestra comunidad keto, podras compartir y encontrar nuevas recetas.<br><br>Recuerda interactuar con los demas ketoAmigos. </p> `;
    welcome.appendChild(bienvenida);
    const imgLike = document.createElement('div');
    imgLike.classList = 'imgLike';
    imgLike.innerHTML = '<img src="imagenes/likePublica.png">';
    welcome.appendChild(imgLike);
    // Botón comenzar
    const buttonComenzar = document.createElement('div');
    buttonComenzar.classList = 'divBotonVista4';
    buttonComenzar.innerHTML = '<button class="botonesIniciales" type="button">COMENZAR</button>'
    welcome.appendChild(buttonComenzar);

    return welcome
  }
  
  //export default welcome;