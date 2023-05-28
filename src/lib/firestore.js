import { db } from './firebase';

import { collection, doc, getDocs, setDoc } from "firebase/firestore";


export async function saveTask(titulo, descripcion){
  try {
    const postRef = collection(db, "post"); 
    await setDoc(doc(postRef,"usuario"),{
      //name: nombre,
      title: titulo,
      description: descripcion
    });
    console.log("Document written with ID: ", postRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  });
}




























/*import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
// import { doc, setDoc } from "firebase/firestore";

export const saveTask = (titulo, descripcion) => {
  addDoc(collection(db, 'task'), { titulo, descripcion });
};

/*export function guardarDatos(title, description) {
  return db.collecton('datos').add({
    titulo: title,
    descripcion: description,
  });
}*/

/*export async function guardarDatos() {
  await setDoc(doc(db, 'datos', 'LA'), {
    title: 'title',
    description: 'description',
  });
}*/
