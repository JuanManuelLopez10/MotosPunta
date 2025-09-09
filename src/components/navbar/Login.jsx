import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../data/FirestoreData";
import { doc, getDoc } from "firebase/firestore";

const LoginModal = ({ closeModal }) => {
    const context = useContext(CartContext)
    const [Phone, setPhone] = useState("") 
    const [Plate, setPlate] = useState("") 

    const verificatePlate = async () => {
    try {
      const docRef = doc(db, "plates", Plate); // Referencia al documento por ID
      const docSnap = await getDoc(docRef); // Obtenemos el documento
      if (docSnap.exists()) {
        console.log(docSnap.data());
closeModal()
      }

    } catch (err) {
      console.log("Error fetching product: " + err.message);
    }
}


    return (
        <div id="LoginModal">
            <h3>Ingresar</h3>
            <input placeholder="Teléfono" value={Phone} onChange={(e) => setPhone(e.target.value)}/>
            <input placeholder="Matrícula" value={Plate} onChange={(e) => setPlate(e.target.value)}/>
            <p>En mayúscula</p>
            <button onClick={() => { verificatePlate() }}>Iniciar sesión</button>

        </div>
    )
}
export default LoginModal;
