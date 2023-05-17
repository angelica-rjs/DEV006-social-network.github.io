import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

export function registrar(email, password ){
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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



