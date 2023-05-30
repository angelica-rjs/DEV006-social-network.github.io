import { db } from './firebase';

import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

export async function saveTask(titulo, descripcion){
  console.log(titulo, descripcion)
  try {
    const postRef = collection(db, "post"); 
    await setDoc(doc(postRef),{
      //name: nombre,
      title: titulo,
      description: descripcion
    });
    console.log("Document written with ID: ", postRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }

  

  export function obtenerData(){
  const collectionRef = collection(db, "post");
  const unsub = onSnapshot(collectionRef, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const allData = doc.data();
     /* const data = document.createElement('div')
      data.setAttribute('id', 'postData');
      const titlePublicacion = document.createElement('h2');
      titlePublicacion.innerHTML = `${allData.title}`
      data.appendChild(titlePublicacion);*/
      

        /*hmtl += `
        <div>
        <h2>${allData.title}</h2>
        <p>${allData.description}</p>
        </div>
        `*/


      // console.log(allData);
     // console.log("Current data: ", doc.data());
     return allData;
    }); 
  });
  
} 



/*export function publicacion(){
  const obtenerData = obtenerData();
console.log("Llamandola data", obtenerData);
}
  







































/*export async function dataUser (mail, name, password){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nombre: name,
      correo: mail,
      contraseña: password
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

}*/