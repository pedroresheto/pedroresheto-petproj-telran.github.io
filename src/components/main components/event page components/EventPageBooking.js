import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changeEventPath} from "../../../actions/rootAction";
import {bookingOnEvent} from "../../../services/BookingEventService";

const EventPageBooking = (props) => {
    const dispatch = useDispatch()
    const [state,setState] = useState({name:'', tel:'', email:''})
    return (
        <div>
            <h2>Записаться на событие</h2>
            <p>Оставьте ваши контактные данные, чтобы мы могли внести вас в список участников.</p>
            <input type={'text'} placeholder={'Name'} value={state.name}
                   onChange={e=>setState(s=>({...s, name: e.target.value}))}
            />
            <br/>
            <input type={'tel'} placeholder={'Phone number'} value={state.tel}
                   onChange={e=>setState(s=>({...s, tel: e.target.value}))}/>
            <br/>
            <input type={'email'} placeholder={'enter ur email'} value={state.email}
                   onChange={e=>setState(s=>({...s, email: e.target.value}))}/>
            <br/>

            <button onClick={()=>{
                bookingOnEvent(state.name, state.tel,state.email,props.title,'booking-guest')
                dispatch(changeEventPath('/payment'))
            }} className={'event__booking__btn'}>Оплатить</button>
        </div>
    );
};

export default EventPageBooking;