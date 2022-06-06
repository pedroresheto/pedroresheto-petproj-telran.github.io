import React, {useEffect, useState} from 'react';
import {changeEventPath, changeTitle, goToEventPage, mainAction} from "../../../actions/rootAction";
import {useDispatch} from "react-redux";
import {getAllEvents} from "../../../services/createEventService";
import ListEventItem from "../ListEventItem";

const EventPageFinal = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({tasks:[
        // getAllEvents('PdxPwBDRMGNmC2hthhRDRKUCs0x1')
        //     .then(data => data.tasks)
        ]})
    // const recomends = state.tasks.slice((state.tasks[state.tasks.length/2]),(state.tasks[state.tasks.length-1]))
    useEffect(()=>{
        getAllEvents('PdxPwBDRMGNmC2hthhRDRKUCs0x1')
            .then(data => setState(s=>({...s,tasks:data.tasks.slice((state.tasks[state.tasks[state.tasks.length/2]]),(state.tasks[state.tasks.length-1]))})))
    },[])

    function handleNext (){
        const x = document.querySelector('.final__slider')
        x.style.left = -710 + 'px';
    }
    function handlePrev (){
        const x = document.querySelector('.final__slider')
        x.style.left = +710 + 'px';
    }


    return (
        <div>
            <h3 onClick={()=>dispatch(mainAction('/main'))}>На главную</h3>
            Поздравляем с приобритением экскурсии!
            <h3>Вам также понравятся:</h3>
            <div className={'event__page__final_sl'}>
                {/*<button id={'past__btn'} onClick={handleNext}> - </button>*/}
                <ul className={'final__slider'}>
                    {state.tasks.map((title,index)=>
                        // <ListEventItem title={title} key={index} />
                        // <div className={'event__slider'}></div>
                        <li key={index}>
                            <ListEventItem title={title} key={index} />
                            {/*<div className={'item__event'}>*/}
                            {/*    <h3>{title.title}</h3>*/}
                            {/*    <h4>{title.date}</h4>*/}
                            {/*    <img src={title.img} alt={'image'}/>*/}
                            {/*    <p>{title.description}</p>*/}
                            {/*    <h4>{title.city}</h4>*/}
                            {/*    <button onClick={()=> {*/}
                            {/*        dispatch(goToEventPage('/eventpage'))*/}
                            {/*        dispatch(changeTitle(title.title, title.date, title.img, title.place,title.text, title.price, title.city))*/}
                            {/*        dispatch(changeEventPath('/info'))*/}
                            {/*    }}>More info</button>*/}
                            {/*</div>*/}
                        </li>
                    )}

                </ul>
                {/*<button id={'next__btn'} onClick={handlePrev}> + </button>*/}
            </div>



        </div>
    );
};

export default EventPageFinal;