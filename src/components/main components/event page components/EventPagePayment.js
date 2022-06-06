import React from 'react';
import {useDispatch} from "react-redux";
import {changeEventPath} from "../../../actions/rootAction";
import logo from './isra-guru.gif'

const EventPagePayment = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Оплата</h2>
            <img src={logo}/>
            {setTimeout(function (){
            dispatch(changeEventPath('/final'))}, 5000)}
        </div>
    );
};

export default EventPagePayment;

