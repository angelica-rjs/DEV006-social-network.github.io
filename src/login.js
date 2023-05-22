import { mostrarLogo, buttonGoogle, botonIniciarSesion} from "./contents";
import { iniciar, loginGoogle } from "./lib/controlador";

export function login(navigateTo){
    mostrarLogo();
    const login = document.createElement('div')

    const formularioVista3 = document.createElement('form');
    formularioVista3.classList = 'form'
    formularioVista3.innerHTML = ` <input class="inputFormSesion" id="emailSesion" type="mail" placeholder="CORREO ELECTRONICO"><small class="smallSesion"></small>
    <input class="inputFormSesion" id="paswordSesion" type="password" placeholder="CONTRASEÑA"><small class="smallSesion"></small>`;
    login.appendChild(formularioVista3);

    // Boton Iniciar sesión
    const botonIniciar = document.createElement('div');
    botonIniciar.classList = 'divBotonVista2';
    botonIniciar.innerHTML = botonIniciarSesion;
    login.appendChild(botonIniciar);
     // letra o
    const letraO = document.createElement('div');
    letraO.classList = 'letraO';
    letraO.innerHTML = '<p> O </p>';
    login.appendChild(letraO);
    //boton de google
    const botonGoogle = document.createElement('div');
    botonGoogle.classList = 'divBotonGoogle';
    botonGoogle.innerHTML = buttonGoogle;
    login.appendChild(botonGoogle);
  
    botonIniciar.addEventListener('click', () => {
        const email = document.getElementById('emailSesion').value;
        const password = document.getElementById('paswordSesion').value;
        iniciar(email, password);
        console.log(email);
        console.log(password);
      })
  
    //addEventLitener de boton google
    botonGoogle.addEventListener("click", () => {
      loginGoogle();
    })
    return login;
   }  

//export default login;