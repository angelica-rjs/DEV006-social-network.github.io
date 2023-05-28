import { db } from './firebase';

import { collection, addDoc, getDocs } from "firebase/firestore";


export async function saveTask(titulo, descripcion){
// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "publicacion"), {
  name: "titulo",
  description: " description"
});
console.log("Document written with ID: ", docRef.id);

const querySnapshot = await getDocs(collection(db, "publicacion"));
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
