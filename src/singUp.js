import { mostrarLogo, botonRegistrarse, buttonGoogle } from './contents';
import { registrar, registroGoogle } from './lib/controlador';

export function singUp(navigateTo) {
  const nodesingUp = document.createElement('div');
  const logo = mostrarLogo();
  nodesingUp.appendChild(logo);
  // Formulario
  const formularioVista2 = document.createElement('form');
  formularioVista2.classList = 'form';
  formularioVista2.innerHTML = ` <input class="inputFormulario" id="emailRegistro" type="mail" placeholder="CORREO ELECTRONICO"><small></small>
    <input class="inputFormulario" id="nameRegistro" type="text" placeholder="NOMBRE DE USARIO"><small></small>
    <input class="inputFormulario" id="passwordRegistro" type="password" placeholder="CONTRASEÑA"><small>Mínimo 6 caracteres</small>`;

    
  nodesingUp.appendChild(formularioVista2);
  // Boton registro
  const botonRegistro = document.createElement('div');
  botonRegistro.classList = 'divBotonVista2';
  botonRegistro.innerHTML = botonRegistrarse;
  nodesingUp.appendChild(botonRegistro);
  // letra o
  const letraO = document.createElement('div');
  letraO.classList = 'letraO';
  letraO.innerHTML = '<p> O </p>';
  nodesingUp.appendChild(letraO);
  // boton de google
  const botonGoogle = document.createElement('div');
  botonGoogle.classList = 'divBotonGoogle';
  botonGoogle.innerHTML = buttonGoogle;
  nodesingUp.appendChild(botonGoogle);

  // addEventLitener de boton resgistro
  botonRegistro.addEventListener('click', () => {
    const emailRegistro = document.getElementById('emailRegistro').value;
    const nameRegistro = document.getElementById('nameRegistro').value;
    const passwordRegistro = document.getElementById('passwordRegistro').value;
    console.log(nameRegistro, "name registro")
    if ( nameRegistro !== ""){
      console.log(nameRegistro, "name registro en if")
    registrar(emailRegistro, passwordRegistro).then((user) => {
      console.log(user, 'singUp');
      if (user !== null) {
        console.log('estamos en if');
        navigateTo('/welcome');
      }
    }).catch((errorMessage) => {
      console.log(errorMessage, 'singUp');
      alert('Correo o contraseña no es válida');
    });
  }else{
    console.log(nameRegistro, "name registro en else")
    alert("debe ingresar name") 
  }
  });
  

  // addEventLitener de boton google
  botonGoogle.addEventListener('click', () => {
    registroGoogle().then((user) => {
      console.log(user, 'singUp');
      if (user !== null) {
        console.log('estamos en if');
        navigateTo('/welcome');
      }
    }).catch((errorMessage) => {
      console.log(errorMessage, 'singUp');
      alert('Correo o contraseña no es válida');
    });
  });
  return nodesingUp;
}