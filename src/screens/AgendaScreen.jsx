import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const AgendaScreen = () => {
    const context = useContext(CartContext)
    const [date, setDate] = useState("")
  const location = useLocation();
    const url = location.pathname.replace("/","")
    
    const cilindradas = [{title:"Hasta 200cc"},{title:"Hasta 500cc"},{title:"Mayores a 500cc"}]

    if (url==="Agenda") {
        return(
            <div id='AGENDA' style={{position:"absolute", top:0, left:0,width:"100vw", height:"100vh", backgroundColor:"white", zIndex:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                
                


            </div>
        )
    }

  
    


}

export default AgendaScreen