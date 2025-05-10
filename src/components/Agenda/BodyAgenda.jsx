import React, { useContext, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import db from '../../data/FirestoreData'
import HourAgenda from './HourAgenda'

const BodyAgenda = ({ date, setHour }) => {
    const hours = ["9:30", "10:30", "11:30", "14:30", "15:30", "16:30", "17:30"]
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const q = query(collection(db, "events"))
        const events = []
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const producto = {
                id: doc.id,
                eventInfo: doc.data()
            }
            events.push(producto)
        });
        setEvents(events)
    }

    if (events[0]) {
        return (
            <div id='AGENDA-Body' style={{ height: "100vh", marginTop: "5vh", width: "100vw", display: "flex", flexDirection: "column", overflowY: "scroll", overflowX: "hidden", paddingBottom: "30vh" }}>

                {
                    hours.map(hour => {
                        const existEvent = events.find((ev) => ev.eventInfo.hour===hour && ev.eventInfo.day===date.getDate())
                        
                            return (
                                <HourAgenda setHour={setHour} exist={existEvent} hour={hour} />
                            )  
                        }
                    )
                            


                    }
                
            </div>
        )
    } else {
        getEvents()
    }
}

export default BodyAgenda