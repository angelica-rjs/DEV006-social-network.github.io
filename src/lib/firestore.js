import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from './firebase';

export async function saveTask(titulo, descripcion) {
  console.log(titulo, descripcion);

  const auth = getAuth(); // Obtener la instancia de autenticación de Firebase

  try {
    const postRef = collection(db, 'post');
    const user = auth.currentUser; // Obtener el usuario autenticado

    await setDoc(doc(postRef), {
      userId: user.uid, // Agregar el ID del usuario autenticado
      title: titulo,
      description: descripcion,
    });

    console.log('Document written with ID: ', postRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export function obtenerData2(callback) {
  onSnapshot(collection(db, 'post'), (snapshot) => {
    const posts = [];
    snapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    callback(posts);
  });
}


export function eliminarPost (){
  
}