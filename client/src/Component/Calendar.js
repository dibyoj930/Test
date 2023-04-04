import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from "react";
import Attend from "./Attend";
import { useRef } from "react";
import axios from 'axios';
import moment from 'moment';
export default function () {
    const [modalOpen, setModalopen] = useState(false);
    const calendarRef = useRef(null);
    const [events,setevents]=useState([]);
    const onEventAdded=(event)=>{
        let calendarapi=calendarRef.current.getApi();
        calendarapi.addEvent({
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate(),
            title:event.title
        });
    }
    async function handleEventAdd(data){
       await axios.post("/api/calendar/create-event",data.event);
    }
    async function handleDatesSet(data){
        const res = axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString());
        setevents(res.data);
    }   
    return (
        <section>
            <button onClick={()=>setModalopen(true)}>Add Attendance</button>
            <div style={{position:"relative",zIndex:0}}>
            <FullCalendar 
            events={events}   
            plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                ref={calendarRef}
                eventAdd={event=>handleEventAdd(event)}
                datesSet={(date)=>{handleDatesSet(date)}}
                />
            </div>
            <Attend isOpen={modalOpen} onClose={()=>setModalopen(false)} onEventAdded={(event)=>onEventAdded(event)}/>
        </section>
    )
}