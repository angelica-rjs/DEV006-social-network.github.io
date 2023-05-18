import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";
import { limpiarContenedorUniversal, vista4 } from "./main" 


//registrarse con correo y contraseña
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

// inicio de sesion con correo y contraseña
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
      alert("su correo no esta registrado")
      });

}


// registrarse con google 
export function registroGoogle(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      limpiarContenedorUniversal();
      vista4();
     })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}


//iniciar sesion con google
export function loginGoogle(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
     })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}


