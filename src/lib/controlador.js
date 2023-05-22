import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";


//registrarse con correo y contraseña
export function registrar(email, password ){
    const auth = getAuth(app);
    console.log("antes del .then" + auth.currentUser);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("despues del .then" + auth.currentUser);
        // Signed in
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..a
      }); return auth;
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
      //limpiarContenedorUniversal();
      //vista4();
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


