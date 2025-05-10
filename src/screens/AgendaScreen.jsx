import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import AgendaHeader from '../components/Agenda/Header';
import BodyAgenda from '../components/Agenda/BodyAgenda';
import ModalAgenda from '../components/Agenda/ModalAgenda';

const AgendaScreen = () => {
    const context = useContext(CartContext)
  const location = useLocation();
    const url = location.pathname.replace("/","")

    const today = new Date()
    const [date, setDate] = useState(today)
    const [hour, setHour] = useState(undefined)

    const [dateAdded, setDateAdded] = useState(false)


    if (url==="Agenda") {
        return(
            <div id='AGENDA' style={{position:"absolute", paddingBlock:"15vh",top:0, left:0, overflowY:"scroll",width:"100vw", backgroundColor:"white", zIndex:4, display:"flex", flexDirection:"column",alignItems:"center"}}>
                <h1>Agendá tu service</h1>
                <AgendaHeader date={date} setDate={setDate}/>
                <BodyAgenda setHour={setHour} date={date}/>
                {
                    date && hour && 
                    <ModalAgenda  date={date} hour={hour} setHour={setHour} />
                }
            </div>
        )
    }
  
    


}

export default AgendaScreen