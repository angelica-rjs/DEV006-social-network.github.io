import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { limpiarContenedorUniversal, vista4 } from "./main" 

export function registrar(email, password ){
  console.log("entramos a la funcion")
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    console.log("estamos en registro")
    const user = userCredential.user;
    limpiarContenedorUniversal();
    vista4();
  
    })   

    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

export function iniciar(email, password){
  console.log("estamos en la funcion iniciar")
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
      console.log("pasamos el login")
      const user = userCredential.user;
      
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      });

}



