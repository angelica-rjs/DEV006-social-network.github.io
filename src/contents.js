export const logoKetoLife = '<img src="imagenes/LogoKetoLife.png">';
export const botonIniciarSesion = '<button class="botonesIniciales" type="button">Iniciar Sesión</button>';
export const botonRegistrarse = '<button class="botonesIniciales" type="button">Registrarse</button>';
export const buttonGoogle = '<button><img src="./imagenes/btn_google.png"></button>';
export const buttonPalta = '<button class="buttonPalta" type="submit" ><img class="imagenPalta" src="imagenes/paltamenu.png"></button>';
export const contenedorMenu = '<div class="contenedorMenu" ></div>';
// export const logoKetoLifeBlanco = '<img class="imagenLogoKetoLifeBlanco" src="imagenes/LogoKetoLifeBlanco.png">';

// /*------------------------------------MOSTRAR LOGO--------------------------------------*/
export function mostrarLogo() {
  const contenedorLogoKetoLife = document.createElement('div');
  contenedorLogoKetoLife.innerHTML = logoKetoLife;
  contenedorLogoKetoLife.setAttribute('class', 'logoketolife');
  return contenedorLogoKetoLife;
}

export function header() {
  const contendorHeader = document.createElement('div');
  contendorHeader.innerHTML = '<div class="divimagenLogoKetoLifeBlanco"><img class="imagenLogoKetoLifeBlanco" src="imagenes/LogoKetoLifeBlanco.png"></div>';
  contendorHeader.setAttribute('class', 'logoketolifeblanco');
  return contendorHeader;
}

// /*------------------------------------MENU--------------------------------------*/

/*export function menu () {
  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu')
  contenedorMenu.innerHTML = buttonPalta;
  return contenedorMenu;
}*/
