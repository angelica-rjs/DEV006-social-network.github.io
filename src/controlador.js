//nuestra 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//importe de fireBase 
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);





/*------------------------------------------FUNCION REGISTRAR------------------------------------*/
export function registrar(emailRegistro, passwordRegistro){
    firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}



/*import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export function iniciar(email, password){
 
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}*/



