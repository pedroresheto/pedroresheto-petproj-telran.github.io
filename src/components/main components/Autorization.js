import React, {useState} from 'react';
import {login} from "../../services/autorizationService";
import {useDispatch} from "react-redux";
import {changeUser} from "../../actions/rootAction";


const Autorization = () => {
    const [state, setState] = useState({email:'',pass:''})
    const dispatch = useDispatch()
    return (
        <div className={'autorization'}>

                <input type={'email'} placeholder={'enter your email'}
                value={state.email} onChange={e => setState(s=>({...s,email:e.target.value}))}
                />
                <br/>
                <input type={'text'} placeholder={'enter your pass'}
                       value={state.pass} onChange={e => setState(s=>({...s,pass:e.target.value}))}
                />
                <br/>
                <button onClick={()=>{
                    login(state.email, state.pass)
                    //ЗДЕСЬ НЕОБХОДИМО НАПИСАТЬ ПРОВЕРКУ ПРОИЗОШЕЛ ЛИ ЛОГИН!!!
                    dispatch(changeUser(true))
                }
                }>Autorization</button>

        </div>
    );
};

export default Autorization;