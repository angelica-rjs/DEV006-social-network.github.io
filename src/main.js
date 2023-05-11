// Este es el punto de entrada de tu aplicacion
import { logoKetoLife } from './contents.js';

const contenedorUniversal = document.getElementById('contenedorUniversal');

function mostrarLogo() {
  const contenedorLogoKetoLife = document.createElement('div');
  contenedorLogoKetoLife.innerHTML = logoKetoLife;
  contenedorLogoKetoLife.setAttribute('class', 'logoketolife');
  contenedorUniversal.appendChild(contenedorLogoKetoLife);
}

// Vista1-frame16
function vista1() {
  mostrarLogo();
  // imagen del sarten de bienvenida
  const imagenBienvenida = document.createElement('div');
  imagenBienvenida.innerHTML = '<img src="imagenes/ImagenBienvenida.png">';
  imagenBienvenida.classList = 'imagenBienvenida';
  contenedorUniversal.appendChild(imagenBienvenida);
  // parrafos de bienvenida
  const h1Bienvenida = document.createElement('div');
  h1Bienvenida.innerHTML = '<h1> ¡Bienvenido! </h1>';
  h1Bienvenida.classList = 'h1Bienvenida';
  contenedorUniversal.appendChild(h1Bienvenida);
  // parrafo que viene despues del bienvenida
  const parrafoBienvenida = document.createElement('div');
  parrafoBienvenida.innerHTML = '<p> Mas que una dieta un estilo de vida </p>';
  parrafoBienvenida.classList = 'parrafoBienvenida';
  contenedorUniversal.appendChild(parrafoBienvenida);
}
vista1();
// contenedorUniversal.innerHTML = `${mostrarLogo}`;
// import { myFunction } from './lib/index.js';
// *myFunction();
