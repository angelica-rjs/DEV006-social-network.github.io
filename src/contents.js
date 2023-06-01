export const logoKetoLife = '<img src="imagenes/LogoKetoLife.png">';
export const botonIniciarSesion = '<button class="botonesIniciales" type="button">Iniciar Sesión</button>';
export const botonRegistrarse = '<button class="botonesIniciales" type="button">Registrarse</button>';
export const buttonGoogle = '<button><img src="./imagenes/btn_google.png"></button>';

// /*------------------------------------MOSTRAR LOGO--------------------------------------*/
export function mostrarLogo() {
  const contenedorLogoKetoLife = document.createElement('div');
  contenedorLogoKetoLife.innerHTML = logoKetoLife;
  contenedorLogoKetoLife.setAttribute('class', 'logoketolife');
  return contenedorLogoKetoLife;
}

// /*------------------------------------HEADER--------------------------------------*/
export function header() {
  const contendorHeader = document.createElement('div');
  contendorHeader.innerHTML = '<div class="divimagenLogoKetoLifeBlanco"><img class="imagenLogoKetoLifeBlanco" src="imagenes/LogoKetoLifeBlanco.png"></div>';
  contendorHeader.setAttribute('class', 'logoketolifeblanco');
  return contendorHeader;
}
