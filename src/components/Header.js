import React from 'react';
import Login from "./Login";
import {useDispatch} from "react-redux";
import {mainAction, goToAboutUs} from "../actions/rootAction";
import logo from './logotype.png'

const Header = () => {

    const dispatch = useDispatch()
    return (
        <div className={'header'}>
            <ul>
                <li onClick={()=> dispatch(mainAction('/main'))}>
                    <img alt={'logotype'} src={logo}/>
                </li>
                <li onClick={()=> dispatch(goToAboutUs('/about'))} id={'about_us_link'}>Открой Израиль со всех сторон</li>
                <li>
                    <Login />
                </li>
            </ul>
        </div>
    );
};

export default Header;