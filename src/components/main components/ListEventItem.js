import React from 'react';
import {useDispatch} from "react-redux";
import {changeEventPath, changeTitle, goToEventPage} from "../../actions/rootAction";

const ListEventItem = (props) => {
    const dispatch = useDispatch()
    return (
        <li key={props.index}>
            <div className={'item__event'}>
                <div className={'item__event__first'}>
                    <img src={props.title.img} alt={'image'} onClick={()=> {
                        dispatch(goToEventPage('/eventpage'))
                        dispatch(changeTitle(props.title.title, props.title.date, props.title.img, props.title.place,props.title.text, props.title.price, props.title.city))
                        dispatch(changeEventPath('/info'))
                    }}/>
                </div>
                <div className={'item__event__second'}>
                    <h2>{props.title.title}</h2>
                    <hr/>
                    <p><i>{props.title.description}</i></p>
                </div>
                <div className={'item__event__third'}>
                    <h4>{props.title.date}</h4>
                    <h4>{props.title.city}</h4>
                    <button onClick={()=> {
                        dispatch(goToEventPage('/eventpage'))
                        dispatch(changeTitle(props.title.title, props.title.date, props.title.img, props.title.place,props.title.text, props.title.price, props.title.city))
                        dispatch(changeEventPath('/info'))
                    }}>More info</button>
                </div>






            </div>
        </li>
    );
};

export default ListEventItem;