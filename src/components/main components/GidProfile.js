import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeUser, createEvent} from "../../actions/rootAction";
import {logout} from "../../services/autorizationService";
import {getAllGuests} from "../../services/BookingEventService";

const GidProfile = () => {
    const dispatch = useDispatch()
    const [state,setState] = useState({bookers:[]})
    const [stateStager,setStateStager] = useState({students:[]})
    useEffect(()=>{
        getAllGuests('booking-guest').then(data => {
            setState(s=>({...s, bookers:data.tasks}))
        })
    },[state]);
    // useEffect(()=>{getAllGuests('new-gids').then(data => {
    //     setStateStager(s=>({...s, students:data.tasks}))
    // })},[])
    return (
        <div>
            <h1>Welcome to Admin panel!</h1>
            <br/>
            <button onClick={()=> dispatch(createEvent('/createevent'))} id={'create__event__btn'}>Create event</button>
            <button id={'logout__btn'} onClick={()=> {
                dispatch(changeUser(false))
                logout()
            }
            }>LOG OUT</button>
            <h3>Здесь отображаются последние записавшиеся на экскурсии:</h3>
            <ul className={'bookers__list'}>
                {state.bookers.map((title, index)=>
                    <li index={index}>
                    <p>{title.title}</p>
                        <p>{title.phone}</p>
                        <p>{title.email}</p>
                        <p>{title.name}</p>
                    </li>
                )}
            </ul>
            {/*<h3>Запросы стать гидом:</h3>*/}
            {/*<ul>*/}
            {/*    {state.students.map((title, index)=>*/}
            {/*        <li index={index}>*/}
            {/*            <p>{title.title}</p>*/}
            {/*            <p>{title.phone}</p>*/}
            {/*            <p>{title.email}</p>*/}
            {/*            <p>{title.name}</p>*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}
        </div>
    );
};

export default GidProfile;