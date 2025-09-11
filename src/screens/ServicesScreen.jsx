import { collection, doc, getDoc, query } from 'firebase/firestore';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import db from '../data/FirestoreData';
import { CartContext } from '../context/CartContext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const ServicesScreen = () => {

  const context = useContext(CartContext)
  const productId = useLocation().pathname.split('/services/')[1];
  const [producto, setproducto] = useState(undefined)
  const [preUser, setPreUser] = useState(undefined)
  const [prePassword, setPrePassword] = useState(undefined)
  const [User, setUser] = useState(undefined)
  const [MonkeyData, setMonkeyData] = useState(undefined)

  const formatFirestoreDate = (ts) => {
    const date = new Date(ts.seconds * 1000 + ts.nanoseconds / 1e6);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // <-- +1
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const fetchPlate = async () => {
    try {
      const docRef = doc(db, "plates", productId); // Referencia al documento por ID
      const docSnap = await getDoc(docRef); // Obtenemos el documento

      if (docSnap.exists()) {
        setproducto({
          id: docSnap.id,
          ...docSnap.data(), // Datos del producto
        });

      }

    } catch (err) {
      console.log("Error fetching product: " + err.message);
    }
  };

  


  const auth = getAuth();
  const signIn = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('password', password);

      })
      .catch((error) => {
        const errorCode = error.code;
      });
  }


  useEffect(() => {
    const storedName = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('password');
    FetchFromFirestore()
    if (storedName && storedPassword && !User) {
      signIn(storedName, storedPassword)
    }
  },[])

  if (productId && !producto) {
    fetchPlate();
    context.setScreen("Services")

  }


 const FetchFromFirestore = async () => {
  const docRef = doc(db, "APIs", "PDFMonkey");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
  setMonkeyData(docSnap.data())
} 
} 


  const generarPDF = async (matricula, fecha) => {
    const body = {
      document: {
        document_template_id: MonkeyData.ServiceStoryTemplateID,
        status: "pending",
        payload: {
          matricula,
          date: fecha,
        },
        meta: {
          _filename: `Historial de servicios-${matricula.plate}-${fecha}.pdf`
        }
      }
    }
    try {
      const response = await fetch("https://api.pdfmonkey.io/api/v1/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MonkeyData.APIKey}`,
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      const pdfUrl = data.document.preview_url
      if (pdfUrl) {
        window.open(data.document.preview_url, "_blank");
      }
    }
    catch (error) {
      console.error("Error generando PDF:", error);
    }

  }

  const generate = () => {
    const services = []
    producto.services.map((item) => {
      const dateString = formatFirestoreDate(item.date)
      const tareasCompletadas = Object.entries(item.jobDone)
        .filter(([tarea, done]) => done)
        .map(([tarea]) => tarea)
        .sort();
      const servicio = { date: dateString, km: item.km, jobDone: tareasCompletadas }
      services.push(servicio)
    })

    const matricula = {
      plate: producto.plate,
      bike: producto.bike,
      user: producto.user,
      services: services
    }
    const today = new Date()
    const todayString = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
    generarPDF(matricula, todayString)

  }



  if (producto && context.Screen === "Services") {
    if (User) {

      return (
        <div id='ServicesScreen' >
          <div id='ServicesScreenHeader'>
            <h2>Historial de services de {producto.id}</h2>
            <h5>Dueño: {producto.user}</h5>
            <h5>Teléfono: {producto.phone}</h5>
            <button onClick={() => { generate() }}>Generar PDF</button>
          </div>
          <div id="ServicesScreenBody">
            {
              producto.services.map((item, index) => {
                const dateString = formatFirestoreDate(item.date)
                const tareasCompletadas = Object.entries(item.jobDone)
                  .filter(([tarea, done]) => done)
                  .map(([tarea]) => tarea)
                  .sort();


                return (
                  <div className='serviceCard' key={index}>
                    <p>Servicio de {item.km}km</p>
                    <p>Fecha: {dateString}</p>
                    {
                      tareasCompletadas.map((task, index) => (
                        <p>{task}</p>
                      ))
                    }
                  </div>
                )
              })
            }
          </div>


        </div>
      )
    } else {

      return (
        <div id='ServicesScreen' >
          <input type="text" placeholder='email' value={preUser} onChange={(e) => { setPreUser(e.target.value) }} />
          <input type="text" placeholder='contraseña' value={prePassword} onChange={(e) => { setPrePassword(e.target.value) }} />
          <button onClick={() => {
            signIn(preUser, prePassword)
          }}>Log in</button>
        </div>
      )
    }
  }
}



export default ServicesScreen;