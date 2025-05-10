import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


const HourAgenda = (props) => {
        return(
                <button id='HourAgenda' disabled={props.exist} onClick={()=>{props.setHour(props.hour)}} style={{paddingBlock:"5vh", backgroundColor:props.exist ? "#ff9393" : "white", width:"20vw",width:"100%", display:"flex", flexDirection:"column", alignItems:"center", border:"none"}}>
                    <p style={{textDecoration:props.exist ? "line-through" : "none",}}>{props.hour}</p>
                </button>
        )
}

export default HourAgenda