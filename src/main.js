// Este es el punto de entrada de tu aplicacion
import { logoKetoLife, botonIniciarSesion, botonRegistrarse, } from './contents.js';
import { registrar } from './controlador.js';


const contenedorUniversal = document.getElementById('contenedorUniversal');

function limpiarContenedorUniversal() {
  contenedorUniversal.innerHTML = '';
}

function mostrarLogo() {
  const contenedorLogoKetoLife = document.createElement('div');
  contenedorLogoKetoLife.innerHTML = logoKetoLife;
  contenedorLogoKetoLife.setAttribute('class', 'logoketolife');
  contenedorUniversal.appendChild(contenedorLogoKetoLife);
}
// Vista 4-frame17.1
function vista4(){
  mostrarLogo();
  // Parrafo Felicidades
  const congratulation = document.createElement('div');
  congratulation.classList = 'congratulation';
  congratulation.innerHTML = '<h1> ¡Felicidades! </h1>';
  contenedorUniversal.appendChild(congratulation);
 // Parrafo descrpción bienvenida
 const welcome = document.createElement('div');
 welcome.classList = 'welcome';
 welcome.innerHTML =  ` <p> Ahora ya eres parte de nuestra comunidad keto, podras compartir y encontrar nuevas recetas.<br><br>Recuerda interactuar con los demas ketoAmigos. </p> `;
 contenedorUniversal.appendChild(welcome);
 const imgLike = document.createElement('div');
 imgLike.classList = 'imgLike';
 imgLike.innerHTML = '<img src="imagenes/likePublica.png">';
 contenedorUniversal.appendChild(imgLike);
 // Botón comenzar
 const buttonComenzar = document.createElement('div');
buttonComenzar.classList = 'divBotonVista4';
buttonComenzar.innerHTML = '<button class="botonesIniciales" type="button">COMENZAR</button>'
contenedorUniversal.appendChild(buttonComenzar);
}


// Vista2-frame17
function vista2() {
  // Ejecutar funcion limpiar contenedor universal
  // El logo
  mostrarLogo();
  // Formulario
  const formularioVista2 = document.createElement('form');
  formularioVista2.classList = 'form';
  formularioVista2.innerHTML = ` <input class="inputFormulario" id="emailRegistro" type="mail" placeholder="CORREO ELECTRONICO"><small></small>
  <input class="inputFormulario" id="nameRegistro" type="text" placeholder="NOMBRE DE USARIO"><small></small>
  <input class="inputFormulario" id="passwordRegistro" type="password" placeholder="CONTRASEÑA"><small>Especificación de contraseña</small>
  <input class="inputFormulario" id="passwordRegistroC" type="password" placeholder="CONFIRMAR CONTRASEÑA"><small>Especificación de contraseña</small>`;
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

  botonRegistro.addEventListener('click', () => {
  const emailRegistro = document.getElementById('emailRegistro').value;
  const nameRegistro = document.getElementById('nameRegistro').value;
  const passwordRegistro = document.getElementById('passwordRegistro').value;
  const passwordRegistroC = document.getElementById('passwordRegistroC').value;
   registrar(emailRegistro, passwordRegistro);
    limpiarContenedorUniversal();
    vista4();
  })
}
// Vista3-frame18
function vista3(){
  mostrarLogo();
  const formularioVista3 = document.createElement('form');
  formularioVista3.classList = 'form'
 formularioVista3.innerHTML = ` <input class="inputFormSesion" id="emailSesion" type="mail" placeholder="CORREO ELECTRONICO"><small class="smallSesion"></small>
  <input class="inputFormSesion" id="paswordSesion" type="password" placeholder="CONTRASEÑA"><small class="smallSesion"></small>`;
  contenedorUniversal.appendChild(formularioVista3);
 // Boton Iniciar sesión
  const botonIniciar = document.createElement('div');
  botonIniciar.classList = 'divBotonVista2';
  botonIniciar.innerHTML = botonIniciarSesion;
  contenedorUniversal.appendChild(botonIniciar);
  
 

  // letra o
  const letraO = document.createElement('div');
  letraO.classList = 'letraO';
  letraO.innerHTML = '<p> O </p>';
  contenedorUniversal.appendChild(letraO);

    botonIniciar.addEventListener('click', () => {
      const email = document.getElementById('emailSesion').value;
      const password = document.getElementById('paswordSesion').value;
     iniciar(email, password);
     console.log(email);
     console.log(password);
    })
 }  
 
// Vista1-frame16
function vista1() {
  mostrarLogo();
  // imagen del sarten de bienvenida
  const imagenBienvenida = document.createElement('div');
  imagenBienvenida.classList = 'imagenBienvenida';
  imagenBienvenida.innerHTML = '<img src="imagenes/ImagenBienvenida.png">';
  contenedorUniversal.appendChild(imagenBienvenida);
  // parrafos de bienvenida
  const h1Bienvenida = document.createElement('div');
  h1Bienvenida.classList = 'h1Bienvenida';
  h1Bienvenida.innerHTML = '<h1> ¡Bienvenido! </h1>';
  contenedorUniversal.appendChild(h1Bienvenida);
  // parrafo que viene despues del bienvenida
  const parrafoBienvenida = document.createElement('div');
  parrafoBienvenida.classList = 'parrafoBienvenida';
  parrafoBienvenida.innerHTML = '<p> Mas que una dieta un estilo de vida </p>';
  contenedorUniversal.appendChild(parrafoBienvenida);
  // boton iniciar sesion
  const botonIniciar = document.createElement('div');
  botonIniciar.classList = 'divBotonVista1';
  botonIniciar.innerHTML = botonIniciarSesion;
  contenedorUniversal.appendChild(botonIniciar);
  // boton registro
  const botonRegistro = document.createElement('div');
  botonRegistro.classList = 'divBotonVista1';
  botonRegistro.innerHTML = botonRegistrarse;
  contenedorUniversal.appendChild(botonRegistro);
  // primera ultima linea
  const parrafocondiciones1 = document.createElement('div');
  parrafocondiciones1.classList = 'parrafocondiciones1';
  parrafocondiciones1.innerHTML = '<p> Al registrarse esta de acuerdo con nuestras </p>';
  contenedorUniversal.appendChild(parrafocondiciones1);
  // segunda ultima linea
  const parrafocondiciones2 = document.createElement('div');
  parrafocondiciones2.classList = 'parrafocondiciones2';
  parrafocondiciones2.innerHTML = '<a href="#"> Politicas de ususario </a>';
  contenedorUniversal.appendChild(parrafocondiciones2);
  // addEventListener-iniciarsesion-vista2-frame17
  botonRegistro.addEventListener('click', () => {
    limpiarContenedorUniversal();
    vista2();
  });
  botonIniciar.addEventListener('click', () => {
    limpiarContenedorUniversal();
    vista3();
  })
}
vista1();

// import { myFunction } from './lib/index.js';
// *myFunction();



