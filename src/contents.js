export const logoKetoLife = '<img src="imagenes/LogoKetoLife.png">';
export const botonIniciarSesion = '<button class="botonesIniciales" type="button">Iniciar Sesión</button>';
export const botonRegistrarse = '<button class="botonesIniciales" type="button">Registrarse</button>';
export const buttonGoogle= '<button><img src="./imagenes/btn_google.png"></button>'


// /*-------------------------------LIMPIAR EL CONTENEDOR--------------------------------*/

export function limpiarContenedorUniversal() {
    contenedorUniversal.innerHTML = '';
  }


// /*------------------------------------MOSTRAR LOGO--------------------------------------*/
  export  function mostrarLogo() {
    const contenedorLogoKetoLife = document.createElement('div');
    contenedorLogoKetoLife.innerHTML = logoKetoLife;
    contenedorLogoKetoLife.setAttribute('class', 'logoketolife');
    contenedorUniversal.appendChild(contenedorLogoKetoLife);
  }
 
  
