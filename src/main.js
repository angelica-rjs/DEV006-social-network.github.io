/*import { myFunction } from './lib/index.js';
 *myFunction();*/

import landing from "./landing";
import singUp from "./singUp";
import welcome from "./welcome";
import login from "./login";
import error from "./error";

const routes = [
  { path: '/', component: landing },
  { path: '/singUp', component: singUp },
  { path: '/welcome', component: welcome },
  { path: '/login', component: login },
  { path: '/error', component: error },
]
/*----------SI QUIEREN BORRAN TODOS LOS COMENTARIOS,
 LOS PUSE PARA ENTENDER EL CODIGO Y ENCONTRAR EL ERRO-------------*/
 
 
//Ruta que queda por defectp (aca se define  que siempre se abre en landing )
const defaultRoute = '/';
const contenedor = document.getElementById('contenedorUniversal');


function navigateTo(hash) {
  // esta linea es la que se encarga de  de path (que estan dentro del objeto routes) sea igual a hash (que es a la ruta en la que el usuario quiere acceser)
  //lo hace a través del metodo find(que es una propiedad para iterar sobre objetos y busca coincidencia)

  //DEFINICION DE COMPONENTE:  Un componente en el contexto de desarrollo de aplicaciones se refiere a una parte modular y reutilizable de la interfaz de usuario que encapsula su propio comportamiento, estado y estilo.
  const route = routes.find((routeFound) => routeFound.path === hash);
  
  //si encuentra ruta valida(que se guardo en la variable route) y si esa ruta tiene un componente valido (con route.component)
  if (route && route.component) {
  // este bloque hace que se genere el cambio de url si es que las coincidencias del if son true
  //pasa 3 argumento 
    window.history.pushState(
      //vacio, se conoce como state asociado con el historial (por lo que entendi en el se almacena info importante)
      {},
      //ruta encontrada y se muestra en el navegador. ej: /login
      route.path,
      //url completa  ketolife/login
      //window.location.origin  devuelve el origen de la URL actual y route.path, es la ruta encontrada en el objeto ambas se concatenan y se crea la url
      window.location.origin + route.path,
    );
/* este if lo que hace es que si nuestro contenedor universal tiene un hijo, o sea, si tiene contenido en el lo elimina
utilizando el removeChild para que se pueda acceder a la nueva url (CON  ESTO ME QUEDA LA DUDA DE SI ES NECESARIO TENER LA 
  FUNCION PARA LIMPIAR EL CONTENEDOR (CREO QUE NO ))*/
    if (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
    

// Aqui se agrega el componente asociado a la ruta actual al contenedor o sea a la vista que el usuario quiere entrar 
//se llama la funcion en la que se llama el componente 
//appendChild toma como argumento el nodo que se desea agregar al contenedor
  
//contenedor.appendChild(route.component(navigateTo));
  

//guarde el componente en una variable 
const componenteNodo = route.component(navigateTo);

//verifico si route.component(navigateTo) es un nodo desde esa propiedad
    if (componenteNodo instanceof Node) {
      contenedor.appendChild(componenteNodo);
      //si no es un nodo me da este mensaje de error 
    } else {
      console.log('El componente no es un nodo DOM ');
    }

   }

   
   // si no se encuentra la ruta asociada en el primer if se ejecuta el esle . 
   // navigateTo llama a la ruta de error para mostrarla 
   else {
    navigateTo('/error');
  }
}


// este evento ocurre cuando el usuario se mueve hacia a tras o adelente en la pagina 
// se llama nuevamentea navigateTo para actualizar la ruta 
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

// aqui se establece la ruta predefinica , si pathname tiene una ruta es esa la que se muestra 
//si no tiene una ruta establecida la que se muestra por defecto es defaultRoute (que la declaramos anteriormente)
navigateTo(window.location.pathname || defaultRoute);




/* 
el error se ejecutaba en la linea 57 
contenedor.appendChild(route.component(navigateTo))
indica que el parámetro 1 pasado a appendChild no es un nodo válido.


EL ERROR Al parecer es porque nuestras vistas (nuevos archivos que tenemos no son NODOS)
se lo pregunte a chatgpt porque podia darme ese error y me sugirio verificar si los nodos que le estamos entregando son validso e hice unas pruebas 




*/