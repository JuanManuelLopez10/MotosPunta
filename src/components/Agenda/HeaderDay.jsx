import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


const HeaderDay = (props) => {

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

        return(
                <button onClick={()=>{props.setDate(props.theDay)}} id='HeaderDay' style={{border:props.date.getDate()===props.theDay.getDate() ? "solid 2px red" : "none",height:"100%", width:"20vw",  marginInline:"3vw",width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <p>{months[props.theDay.getMonth()]}</p>
                    <p>{props.theDay.getDate()}</p>
                </button>

        )

  
    


}

export default HeaderDay