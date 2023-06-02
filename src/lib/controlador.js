import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { app } from './firebase';
import { async } from 'regenerator-runtime';

// registrarse con correo y contraseña
export async function registrar(email, password) {
  const auth = getAuth(app);
  console.log(`antes del .then${auth.currentUser}`);
  const result = createUserWithEmailAndPassword(auth, email, password);
  try {
    const userCredential = await result;
    console.log(`despues del .then${auth.currentUser}`);
    // Signed in
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

// inicio de sesion con correo y contraseña
export async function iniciar(email, password) {
  console.log('estamos en la funcion iniciar');
  const auth = getAuth(app);
  const resultiniciar = signInWithEmailAndPassword(auth, email, password);
  try {
    const userCredential = await resultiniciar;
    console.log('despues del .try', auth.currentUser);
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
export async function registroGoogle() {
  const provider =  new GoogleAuthProvider();
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider)
   try{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user
    }catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error)
      throw errorMessage;
    }
}

// iniciar sesion con google
export async function loginGoogle() {
  // TODO  validaciones
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const result= await signInWithPopup(auth, provider)
    try {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }
    catch(error){
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    };
}

// Solo se puede singIn con Google?

// export async function login() {
//  const provider = new firebase.auth.GoogleAuthProvider();
//  const auth = firebase.auth();
//  try {
//    const response = await auth.singInWithPopUp(provider);
//    console.log(response);
//    return response.user;
//  } catch (error) {
//    throw new ERROR(error);
//  }
// };
