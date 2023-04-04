import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function ({ isOpen, onClose, onEventAdded }) {
    const [title, settitle] = useState("");
    const [start, setstart] = useState(null);
    const [end, setend] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();
        onEventAdded({
            title,
            start,end
        })
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Present/Absent" value={title} onChange={e => settitle(e.target.value)}></input>
                
                <div>
          <label>Select start day</label>          
                    <DatePicker selected={start} onChange={(date)=>setstart(date)} dateFormat='dd/MM/yyyy' maxDate={new Date()}
                    ></DatePicker>
                </div>
                <div>
          <label>Select end day</label>          
                    <DatePicker selected={end} onChange={(date)=>setend(date)} dateFormat='dd/MM/yyyy' maxDate={new Date()}
                    ></DatePicker>
                </div>
                <button>Add</button>
            </form>
        </Modal>
    )
}