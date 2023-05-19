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
const defaultRoute = '/';
const contenedor = document.getElementById('contenedorUniversal');


function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
    
    contenedor.appendChild(route.component(navigateTo));
    //contenedor.appendChild(route.component[0](navigateTo))
   } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);




