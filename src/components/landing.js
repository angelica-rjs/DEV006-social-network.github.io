import { mostrarLogo, botonIniciarSesion, botonRegistrarse } from './contents';

export function landing(navigateTo) {
  // se crea el div padre
  const nodelanding = document.createElement('div');
  // se inserta el logo
  const logo = mostrarLogo();
  nodelanding.appendChild(logo);

  // imagen de bienvenida
  const imagenBienvenida = document.createElement('div');
  imagenBienvenida.classList = 'imagenBienvenida';
  imagenBienvenida.innerHTML = '<img src="imagenes/ImagenBienvenida.png">';
  nodelanding.appendChild(imagenBienvenida);
  // parrafos de bienvenida
  const h1Bienvenida = document.createElement('div');
  h1Bienvenida.classList = 'h1Bienvenida';
  h1Bienvenida.innerHTML = '<h1> ¡Bienvenido! </h1>';
  nodelanding.appendChild(h1Bienvenida);
  // parrafo que viene despues del bienvenida
  const parrafoBienvenida = document.createElement('div');
  parrafoBienvenida.classList = 'parrafoBienvenida';
  parrafoBienvenida.innerHTML = '<p> Mas que una dieta un estilo de vida </p>';
  nodelanding.appendChild(parrafoBienvenida);
  // boton iniciar sesion
  const botonIniciar = document.createElement('div');
  botonIniciar.classList = 'divBotonVista1';
  botonIniciar.innerHTML = botonIniciarSesion;
  nodelanding.appendChild(botonIniciar);
  // boton registro
  const botonRegistro = document.createElement('div');
  botonRegistro.classList = 'divBotonVista1';
  botonRegistro.innerHTML = botonRegistrarse;
  nodelanding.appendChild(botonRegistro);
  // primera ultima linea
  const parrafocondiciones1 = document.createElement('div');
  parrafocondiciones1.classList = 'parrafocondiciones1';
  parrafocondiciones1.innerHTML = '<p> Al registrarse esta de acuerdo con nuestras </p>';
  nodelanding.appendChild(parrafocondiciones1);
  // segunda ultima linea
  const parrafocondiciones2 = document.createElement('div');
  parrafocondiciones2.classList = 'parrafocondiciones2';
  parrafocondiciones2.innerHTML = '<a href="#"> Politicas de ususario </a>';
  nodelanding.appendChild(parrafocondiciones2);
  // contenedor.appendChild(landing)

  // addEventListener-iniciarsesion-vista2-frame17
  botonRegistro.addEventListener('click', () => {
    navigateTo('/singUp');
  });
  botonIniciar.addEventListener('click', () => {
    navigateTo('/login');
  });

  return nodelanding;
}
