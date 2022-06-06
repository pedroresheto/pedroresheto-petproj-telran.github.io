import React from 'react';
import {useDispatch} from "react-redux";
import {loginAction} from "../actions/rootAction";



const Login = () => {
    const dispatch = useDispatch()
    return (
        //<Provider store={store}>
            <div className={'login'}>
                <button onClick={()=>dispatch(loginAction('/goprofile'))} id={'login_button'}>Go to PROFILE</button>
            </div>
        //</Provider>

    );
};

export default Login;

