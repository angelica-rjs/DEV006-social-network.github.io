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
}
vista1();
// contenedorUniversal.innerHTML = `${mostrarLogo}`;
// import { myFunction } from './lib/index.js';
// *myFunction();
