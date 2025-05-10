import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es' // Importamos el idioma español
import { CartContext } from '../../context/CartContext'
import HeaderDay from './HeaderDay'

const AgendaHeader = ({date, setDate}) => {
    const context = useContext(CartContext)

    const today = new Date()
    
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    
    
    
    return(
                <div id='AGENDA-Header' style={{height:"20%", width:"100vw", display:"flex", flexDirection:"row", overflowX:"scroll"}}>
                    {
                    Array.from({ length: 14 }, (_, i) => i).map(num=>{
                        const theDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + num)
                            if (theDay.getDay()>0) {
                                return(
                                    <HeaderDay date={date} setDate={setDate} theDay={theDay}/>
                                )    
                        }
                        
                        

                    })

                    }
                    
                </div>

        )

  
    


}

export default AgendaHeader