import { collection, addDoc } from 'firebase/firestore';
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
