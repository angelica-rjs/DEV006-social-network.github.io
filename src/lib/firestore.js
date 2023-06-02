import { collection, doc, setDoc, onSnapshot, deleteDoc, query, orderBy, updateDoc, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db, colRef } from './firebase';

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
      like: 0,
    });

    console.log('Document written with ID: ', postRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}



const orderedQuery = query(colRef, orderBy('timestamp', 'desc'));
export const postData = (callback) => onSnapshot(query(colRef), callback);


export async function borrarPublicacion(id) {
  try {
    const docRef = doc(db, 'post', id);
    await deleteDoc(docRef);
    console.log('La publicación se ha eliminado correctamente en Firestore');
  } catch (error) {
    console.error('Error al intentar borrar la publicación en Firestore:', error);
  }
}

export async function likePublicacion(id) {
  try {
    const docRef = doc(db, 'post', id);
    await updateDoc(docRef, { like: increment(1) });
  } catch (error) {
    console.error('Error al intentardar like', error);
  }
}

export async function dislikePublicacion(id) {
  try {
    const docRef = doc(db, 'post', id);
    await updateDoc(docRef, { like: increment(-1) });
  } catch (error) {
    console.error('Error al intentardar like', error);
  }
}
