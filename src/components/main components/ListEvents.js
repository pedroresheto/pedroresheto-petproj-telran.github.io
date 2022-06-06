import React, {useEffect, useState} from 'react';
import {getAllEvents} from "../../services/createEventService";
import {useDispatch} from "react-redux";
import {goToEventPage} from "../../actions/rootAction";
import ListEventItem from "./ListEventItem";
import Filters from "./event page components/Filters";

const ListEvents = () => {
    const [state, setState] = useState({inp:'',tasks:[]})
    // const dispatch = useDispatch

    const [stateFilter,setStateFilter] = useState({firstDate:'', secondDate:'', city:''})
    // function handleFilterClick(){
    //     // useEffect(()=>{
    //     //     getAllEvents('PdxPwBDRMGNmC2hthhRDRKUCs0x1').then(data=>{
    //     //         setState(s=>({...s, tasks:data.tasks.filter(item => {
    //     //             stateFilter.secondDate >= item.title.title.date >= stateFilter.firtsDate
    //     //             })}))
    //     //     })
    //     // }, [])
    //     state.tasks.filter(item =>{
    //         // item.title.date >= stateFilter.firstDate &&
    //         item.title.date
    //     })
    // }

    useEffect(()=>{
        getAllEvents('PdxPwBDRMGNmC2hthhRDRKUCs0x1').then(data=>{
            setState(s=>({...s, tasks:data.tasks}))
        })
    }, [])
    return (
        <div className={'main'}>
            <h1>Путешествия по Израилю с профессиональными гидами ISRA-GURU</h1>

            <div className={'list_text'}>
                <p>Найти экскурсию на свой вкус и цвет по Израилю стало легко!<br/>
                Собрали события и экскурсии по стране обетованной всех типов и видов.<br/> Откройте для себя это чудесное место с самого дорогого мегаполиса в мире до кибуца.<br/>
                Погрузитесь в чудесный мир становления процветающего и развивающегося государства!</p>
            </div>

            {/*/!*<Filters/>*!/*/}
            {/*<div className={'filters'}>*/}
            {/*    <div className={'filters__date'}>*/}
            {/*        <label htmlFor={'firstdate'}>Первая дата</label>*/}
            {/*        <input type={'date'} id={'firstdate'} min={'2022-04-22'}*/}
            {/*        value={stateFilter.firstDate} onChange={e=>setStateFilter(s=>({...s,firstDate: e.target.value}))}/>*/}

            {/*        <label htmlFor={'seconddate'}>Вторая дата</label>*/}
            {/*        <input type={'date'} id={'seconddate'} max={'2022-09-23'}*/}
            {/*               value={stateFilter.secondDate} onChange={e=>setStateFilter(s=>({...s,secondDate: e.target.value}))}/>*/}
            {/*    </div>*/}
            {/*    <div className={'filters__city'}>*/}
            {/*        <select className={'list__select'}>*/}
            {/*            <option>Tel-Aviv</option>*/}
            {/*            <option>Irushalim</option>*/}
            {/*            <option>Ashdod</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <button onClick={()=>{*/}
            {/*        // handleFilterClick()*/}
            {/*    }} id={'filter__btn'}>Filter</button>*/}
            {/*</div>*/}

            <ul>

                {state.tasks.map((title, index)=>

                <ListEventItem title={title} key={index} />
                )}
            </ul>
        </div>
    );
};

export default ListEvents;

