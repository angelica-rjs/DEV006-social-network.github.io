import { mostrarLogo, botonRegistrarse, buttonGoogle } from "./contents";
 
 function singUp(navigateTo) {
    // Ejecutar funcion limpiar contenedor universal
    // El logo
    mostrarLogo();
    // Formulario
    const formularioVista2 = document.createElement('form');
    formularioVista2.classList = 'form';
    formularioVista2.innerHTML = ` <input class="inputFormulario" id="emailRegistro" type="mail" placeholder="CORREO ELECTRONICO"><small></small>
    <input class="inputFormulario" id="nameRegistro" type="text" placeholder="NOMBRE DE USARIO"><small></small>
    <input class="inputFormulario" id="passwordRegistro" type="password" placeholder="CONTRASEÑA"><small>Especificación de contraseña</small>`;
    contenedorUniversal.appendChild(formularioVista2);
    // Boton registro
    const botonRegistro = document.createElement('div');
    botonRegistro.classList = 'divBotonVista2';
    botonRegistro.innerHTML = botonRegistrarse;
    contenedorUniversal.appendChild(botonRegistro);
    // letra o
    const letraO = document.createElement('div');
    letraO.classList = 'letraO';
    letraO.innerHTML = '<p> O </p>';
    contenedorUniversal.appendChild(letraO);
    //boton de google
    const botonGoogle = document.createElement('div');
    botonGoogle.classList = 'divBotonGoogle';
    botonGoogle.innerHTML = buttonGoogle;
    contenedorUniversal.appendChild(botonGoogle);
  
  //addEventLitener de boton resgistro
    botonRegistro.addEventListener('click', () => {
      const emailRegistro = document.getElementById('emailRegistro').value;
      const nameRegistro = document.getElementById('nameRegistro').value;
      const passwordRegistro = document.getElementById('passwordRegistro').value;
      registrar(emailRegistro, passwordRegistro).then((userCredential) => {
        const user = userCredential.user;
        console.log(user)

      })
  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
     // console.log(registro)
      //console.log("este es el retorno: "+ registro)
      
      //console.log ("este es el mail: "+ emailRegistro)
      //console.log ("este es el name: "+ nameRegistro)
      //console.log ("este es la contraseña: "+ passwordRegistro)
    });
  
    //addEventLitener de boton google
    botonGoogle.addEventListener("click", () => {
      //esta funcion es de controlador 
      //registroGoogle();
    })
  }

  export default singUp;
  