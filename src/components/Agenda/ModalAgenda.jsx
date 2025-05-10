import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import HeaderDay from './HeaderDay'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../data/FirestoreData'

const ModalAgenda = ({hour, setHour, date}) => {

    const [model, setmodel] = useState(undefined)
    const [km, setkm] = useState(0)
    const [phone, setPhone] = useState(undefined)
    const [name, setName] = useState(undefined)

    const handleChangemodel = (e) => {
        setmodel(e.target.value)
      }
      const handleChangeKm = (e) => {
        setkm(e.target.value)
      }
      const handleChangeNumber = (e) => {
        setPhone(e.target.value)
      }
      const handleChangeName = (e) => {
        setName(e.target.value)
      }

        const getEvents = async () => {
            const docRef = await addDoc(collection(db, "events"), {
                hour: hour,
                name: name,
                phone: phone,
                bike:model,
                km: km,
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
              });
              console.log("Document written with ID: ", docRef.id);


              
      }
      
    return(
                <div id='ModalAgenda' style={{width:"90vw", padding:"5%", backgroundColor:"grey", position:"absolute", top:"20vh", left:"5vw", zIndex:5, overflowX:"scroll", boxShadow:"0px 0px 10px black"}}>
                    
                    <div id='ModalAgendaHeader' style={{display:"flex", width:"100%", justifyContent:"space-between",  height:"10%"}}>
                        <p>Últimos pasos</p>
                        <button style={{border:"none", background:"none"}} onClick={()=>{setHour(undefined)}} >X</button>
                    </div>

                    <div id='ModalAgendaBody'>
                        <label>Moto (marca y modelo): </label>
                        <input name='Moto' value={model} onChange={handleChangemodel} style={{width:"100%"}}/>

                        <label>Kilómetros: </label>
                        <input type="number" name='Km' value={km} onChange={handleChangeKm} style={{width:"100%"}}/>

                        <label>Número de teléfono: </label>
                        <input type="number" name='Number' value={phone} onChange={handleChangeNumber} style={{width:"100%"}}/>

                        <label>Nombre: </label>
                        <input name='Name' value={name} onChange={handleChangeName} style={{width:"100%"}}/>


                        <button onClick={()=>{getEvents()}} style={{width:"100%", height:"5vh", backgroundColor:"green"}}>
                            Agendar hora
                        </button>
                    </div>
                </div>

        )

  
    


}

export default ModalAgenda