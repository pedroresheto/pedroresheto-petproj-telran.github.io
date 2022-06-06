import React from 'react';
import {useDispatch} from "react-redux";
import {goToEventPage} from "../../actions/rootAction";


const Attention = () => {
    const dispatch = useDispatch()
    return (
        <div className={'create__event__modal'}>
            <div className={'create__event__modal__container'}>
                <h2>Обратите внимание!</h2>
                <p>Функционал добавления изображения с вашего устройства в данный момент находится в разработке. Приносим извинения за предоставленные неудобства и просим вас воспользоваться ссылкой</p>
                <button onClick={()=> dispatch(goToEventPage('/createevent'))}>Понял, принял!</button>
            </div>
        </div>
    );
};

export default Attention;