import React from 'react';
import {changeEventPath} from "../../../actions/rootAction";
import {useDispatch} from "react-redux";

const EventPageInfo = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            {/*<h2>Информация о событии</h2>*/}

            <div className={'event_date'}>
                {/*<h4>Дата: </h4>*/}
                <h4>{props.date}</h4>
            </div>
            <h2>{props.city}</h2>
            <p>{props.text}</p>


            <h4>Где встречаемся:</h4>

            <p>{props.place}</p>
            <h3>Стоимость {props.price} $</h3>
            <button onClick={()=>dispatch(changeEventPath('/booking'))} className={'event__go_btn'}>Хочу посейтить!</button>
        </div>
    );
};

export default EventPageInfo;