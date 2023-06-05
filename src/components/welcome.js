import { mostrarLogo } from './contents';

export function welcome(navigateTo) {
  const nodewelcome = document.createElement('div')
  const logo = mostrarLogo();
  nodewelcome.appendChild(logo);
  // Parrafo Felicidades
  const congratulation = document.createElement('div');
  congratulation.classList = 'congratulation';
  congratulation.innerHTML = '<h1> ¡Felicidades! </h1>';
  nodewelcome.appendChild(congratulation);
  // Parrafo descrpción bienvenida
  const bienvenida = document.createElement('div');
  bienvenida.classList = 'welcome';
  bienvenida.innerHTML = ' <p> Ahora ya eres parte de nuestra comunidad keto, podras compartir y encontrar nuevas recetas.<br><br>Recuerda interactuar con los demas ketoAmigos. </p> ';
  nodewelcome.appendChild(bienvenida);
  const imgLike = document.createElement('div');
  imgLike.classList = 'imgLike';
  imgLike.innerHTML = '<img src="imagenes/likePublica.png">';
  nodewelcome.appendChild(imgLike);
  // Botón comenzar
  const buttonComenzar = document.createElement('div');
  buttonComenzar.classList = 'divBotonVista4';
  buttonComenzar.innerHTML = '<button class="botonesIniciales" type="button">COMENZAR</button>'
  nodewelcome.appendChild(buttonComenzar);

 buttonComenzar.addEventListener('click', ()=>{
  navigateTo('/home');
 }) 
  return nodewelcome;
}

