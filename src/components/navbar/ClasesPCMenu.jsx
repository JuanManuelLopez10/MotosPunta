import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../data/FirestoreData'

const ClasesPCMenu = (props) => {
    const context = useContext(CartContext)
    const [ArrayOfOptions, setArrayOfOptions] = useState([])
    const getProducts = async () => {
        const ProductosCollection = collection(db, "Productos");
        const motosSnapshot = await getDocs(ProductosCollection);
        const Datos = motosSnapshot.docs.filter((doc)=>doc.data().Class===props.SelectedOpcion).map((doc)=>doc.data().Type).filter((item, index, self) => 
            index === self.findIndex((t) => t === item)
          );

        setArrayOfOptions(Datos)
    }    
    useEffect(()=>{
        getProducts()
    },[props.SelectedOpcion])

    return (
    <div id='ClasesPCMenu' >
        {
            ArrayOfOptions.map((opcion, index) => {
                return (
                    <Link to={`/clase/${opcion}`} onClick={()=>{
                        props.setSelectedOpcion(undefined)
                        context.setScreen('Clase')
                    }} className='Opciooon' key={index} style={{fontSize:context.fontPixel*.3}}>{opcion.toUpperCase()}</Link>
                )
            })
        }
    </div>
  )
}

export default ClasesPCMenu