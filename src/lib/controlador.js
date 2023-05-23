import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";


//registrarse con correo y contraseña
export async function registrar(email, password ){
    const auth = getAuth(app);
    console.log("antes del .then" + auth.currentUser);
    const result = createUserWithEmailAndPassword(auth, email, password);
    try {
    const userCredential = await result;
    console.log("despues del .then" + auth.currentUser);
    // Signed in
    const user = userCredential.user;
    console.log(user, "user controlador");
    return user;
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode, "errorCode");
    const errorMessage = error.message;
    console.log(errorMessage, "errorMessage");
    throw errorMessage;
  }
} 

// inicio de sesion con correo y contraseña
export async function iniciar(email, password) {
  console.log('estamos en la funcion iniciar');
  const auth = getAuth(app);
  const resultiniciar = signInWithEmailAndPassword(auth, email, password);
  try {
    const userCredential = await resultiniciar;
    console.log("despues del .try", auth.currentUser);
    const user = userCredential.user;
    console.log(user, 'user controlador');
    return user;
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode, 'errorCode');
    const errorMessage = error.message;
    console.log(errorMessage, 'errorMessage');
    throw errorMessage;
  }
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


