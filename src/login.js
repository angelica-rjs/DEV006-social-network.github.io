import { mostrarLogo, buttonGoogle, botonIniciarSesion } from './contents';
import { iniciar, loginGoogle } from './lib/controlador';

export function login(navigateTo) {
  const nodelogin = document.createElement('div');
  const logo = mostrarLogo();
  nodelogin.appendChild(logo);

  const formularioVista3 = document.createElement('form');
  formularioVista3.classList = 'form';
  formularioVista3.innerHTML = ` <input class="inputFormSesion" id="emailSesion" type="mail" placeholder="CORREO ELECTRONICO"><small class="smallSesion"></small>
    <input class="inputFormSesion" id="paswordSesion" type="password" placeholder="CONTRASEÑA"><small class="smallSesion"></small>`;
  nodelogin.appendChild(formularioVista3);

  // Boton Iniciar sesión
  const botonIniciar = document.createElement('div');
  botonIniciar.classList = 'divBotonVista2';
  botonIniciar.innerHTML = botonIniciarSesion;
  nodelogin.appendChild(botonIniciar);
  // letra o
  const letraO = document.createElement('div');
  letraO.classList = 'letraO';
  letraO.innerHTML = '<p> O </p>';
  nodelogin.appendChild(letraO);
  // boton de google
  const botonGoogle = document.createElement('div');
  botonGoogle.classList = 'divBotonGoogle';
  botonGoogle.innerHTML = buttonGoogle;
  nodelogin.appendChild(botonGoogle);

  botonIniciar.addEventListener('click', () => {
    const email = document.getElementById('emailSesion').value;
    const password = document.getElementById('paswordSesion').value;
    iniciar(email, password).then((user) => {
      console.log(user, 'iniciar');
      if (user !== null) {
        console.log('estamos en if');
        navigateTo('/home');
      }
    }).catch((errorMessage) => {
      console.log(errorMessage, 'singUp');
      alert('Usuario no registrado o contraseña incorrecta');
    });
  });

  // addEventLitener de boton google
  botonGoogle.addEventListener('click', () => {
    loginGoogle().then((user) => {
      console.log(user, 'iniciar');
      if (user !== null) {
        navigateTo('/home');
      }
    }).catch((errorMessage) => {
      console.log(errorMessage, 'singUp');
      alert('Usuario no registrado o contraseña incorrecta');
    });
  });
  return nodelogin;
}
