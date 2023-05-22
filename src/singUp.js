import { mostrarLogo, botonRegistrarse, buttonGoogle, limpiarContenedorUniversal } from "./contents";
import { registrar, registroGoogle } from "./lib/controlador"

 export function singUp(navigateTo) {

    const singUp = document.createElement('div')
    mostrarLogo();
    // Formulario
    const formularioVista2 = document.createElement('form');
    formularioVista2.classList = 'form';
    formularioVista2.innerHTML = ` <input class="inputFormulario" id="emailRegistro" type="mail" placeholder="CORREO ELECTRONICO"><small></small>
    <input class="inputFormulario" id="nameRegistro" type="text" placeholder="NOMBRE DE USARIO"><small></small>
    <input class="inputFormulario" id="passwordRegistro" type="password" placeholder="CONTRASEÑA"><small>Especificación de contraseña</small>`;
    singUp.appendChild(formularioVista2);
    // Boton registro
    const botonRegistro = document.createElement('div');
    botonRegistro.classList = 'divBotonVista2';
    botonRegistro.innerHTML = botonRegistrarse;
    singUp.appendChild(botonRegistro);
    // letra o
    const letraO = document.createElement('div');
    letraO.classList = 'letraO';
    letraO.innerHTML = '<p> O </p>';
    singUp.appendChild(letraO);
    //boton de google
    const botonGoogle = document.createElement('div');
    botonGoogle.classList = 'divBotonGoogle';
    botonGoogle.innerHTML = buttonGoogle;
    singUp.appendChild(botonGoogle);
  
  //addEventLitener de boton resgistro
    botonRegistro.addEventListener('click', () => {
      const emailRegistro = document.getElementById('emailRegistro').value;
      const nameRegistro = document.getElementById('nameRegistro').value;
      const passwordRegistro = document.getElementById('passwordRegistro').value;
      registrar(emailRegistro, passwordRegistro)
      limpiarContenedorUniversal();
      navigateTo('/welcome')
      
    })
  
    //addEventLitener de boton google
    botonGoogle.addEventListener("click", () => {
      //esta funcion es de controlador 
      registroGoogle();
    })
    return singUp
  }

  //export default singUp;
  