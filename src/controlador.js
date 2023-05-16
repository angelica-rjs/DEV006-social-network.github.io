//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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



