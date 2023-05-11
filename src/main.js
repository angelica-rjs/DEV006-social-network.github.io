// Este es el punto de entrada de tu aplicacion
import { logoKetoLife } from './contents.js';

const contenedorUniversal = document.getElementById('contenedorUniversal');
const contenedorLogoKetoLife = document.createElement('div');
contenedorLogoKetoLife.innerHTML = logoKetoLife;
contenedorUniversal.appendChild(contenedorLogoKetoLife);

// import { myFunction } from './lib/index.js';
// *myFunction();
