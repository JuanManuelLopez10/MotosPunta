import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useState } from "react";
import db from "./FirestoreData";


export const FetchFromTXT = async () => {
    try {
      // Realiza la solicitud para obtener el contenido del archivo
      const response = await fetch("/productos.txt");
      let prod = []
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo: ${response.statusText}`);
      }
      while (!prod[0]){
        const text = await response.text();
  
        // Convierte el texto directamente a JSON
        const productArray = JSON.parse(text);
         
        if(productArray[0]) {
          prod = productArray
          return(productArray)
        }
      }

      
    } catch (error) {
      console.error("Error al leer o parsear el archivo:", error);
      return []; // Retorna un array vacío en caso de error
    }
  };
  const syncToFirestore = async (products) =>{
    try {
      for (const product of products) {
        const idd = product.idd.toString()
        const newIdd = idd.replace(/\s+/g, "")  //      TENGO QUE CAMBIAR ESTO PARA QUE LOS " " PASEN A SER "-"
        const docRef = doc(db, "products", newIdd); // Usa el id como documento
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
          await setDoc(docRef, product);
        }
      }
    } catch (err) {
      console.error("Error al sincronizar datos con Firestore:", err);
    }
  }
  export const FetchFromGoogle = async () => {
    let url = 'https://api.sheety.co/ffb19aa17e14779f56d59764c83d724b/productosEnLaPágina/products';
    var headers = new Headers();
    headers.append("Authorization", "Bearer Jotaeme10Jotaeme10");
    fetch(url, {
      method: "GET",
      headers: headers
    })
    .then(response => response.json())
    .then(json => {
      syncToFirestore(json.products)
    });

  };
export const FetchFromFirestore = async () => {
  const q = query(collection(db, "products"), 
  where("availability", "==", "in stock"));
  const productos = []
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  if(doc.data().description===""){
    console.log(doc.data().title);
    console.log(doc.data().color);
    console.log(doc.id);
  }
  // doc.data() is never undefined for query doc snapshots
  const producto = {
    id: doc.id,
    product: doc.data()}
  
  productos.push(producto)
});
return productos
} 
