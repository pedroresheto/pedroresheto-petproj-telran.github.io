import React, {useState} from 'react';
import {bookingOnEvent} from "../../services/BookingEventService";

const AboutUs = () => {
    const [state, setState] = useState({name:'', tel:'', email:''})
    return (
        <div className={'about__us__page'}>
            <div className={'about__us__left'}></div>
            <div className={'about__us__right'}></div>
            <div className={'about__us__main'}>
                <h1>Кратко и скромно о нас</h1>
                <p>ISRA GURU уверенно развивающийся проект на туристическом мире</p>
                <p>Даже в ковидные времена удалось привлечь разработчиков и плоды их деятельности вы наблюдаете сейчас</p>
                <h3>История</h3>
                <p>"Если ты владеешь информацией - ты владеешь всем!" - вот слоган современного общества. Во все времена сталкеры, проводники и гиды привлекали исктелей и странников. В современном мире, даже в пост-ковидные времена всегда нужен человек, знающий место и его историю. Присоединяйтесь к нашей команде специалистов!</p>
                <h2>Быть гидом могут не только лишь все, но стоит попробовать!</h2>
                <p>Подайте заявку на стажировку среди гидов прямо на нашем сайте!</p>
                <input type={'text'} placeholder={'name'} value={state.name}
                       onChange={e=> setState(s=>({...s,name:e.target.value}))}/>
                <br/>
                <input type={'text'} placeholder={'name'} value={state.tel}
                       onChange={e=> setState(s=>({...s,tel:e.target.value}))}/>
                <br/>
                <input type={'text'} placeholder={'name'} value={state.name}
                       onChange={e=> setState(s=>({...s,email:e.target.value}))}/>
                <br/>
                <button onClick={()=>bookingOnEvent(state.name,state.tel,state.email,'Стажеры','new-gids')}>Записаться на стажировку</button>
            </div>


        </div>
    );
};

export default AboutUs;