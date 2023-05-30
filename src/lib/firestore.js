import { db } from './firebase';
import { collection, doc, setDoc, getDocs, onSnapshot } from "firebase/firestore";

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

  

  /*export async function obtenerData() {
    const collectionRef = collection(db, "post");
    const querySnapshot = await getDocs(collectionRef);  // en la funcion asyncrona con getdoc obtenemos pla promesa
  
    const allData = []; // array para poner los datos 
  
    querySnapshot.forEach((doc) => {
      allData.push(doc.data()); // cpn push vamos agregando los dato al array
    });
  
    return allData;
  }*/

  export function obtenerData2(callback){
     onSnapshot(collection(db, "post"), (snapshot) => {
      const posts = []; // array para poner los datos 
      snapshot.forEach((doc) => {
        posts.push(doc.data()); // cpn push vamos agregando los dato al array
      });
      callback(posts)
     } );
     
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