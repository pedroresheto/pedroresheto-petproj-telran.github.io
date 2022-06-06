import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeEventPath, mainAction} from "../../actions/rootAction";
import EventPageInfo from "./event page components/EventPageInfo";
import EventPageBooking from "./event page components/EventPageBooking";
import EventPagePayment from "./event page components/EventPagePayment";
import EventPageFinal from "./event page components/EventPageFinal";

const EventPage = (props) => {
    const [state, setState] = useState()
    const {title, date, img, place, text, price, city} = useSelector(state => state)
    const dispatch = useDispatch()
    const {eventPagePath} = useSelector(state => state)
    //console.log(title)
    return (
        <div className={'event__page'}>
            <div className={'event__leftpart'}></div>
            <div className={'event__rightpart'}></div>
            <div className={'event__main__info'}>
                <div className={'event__main__info__left'}>
                    <img src={img}/>
                </div>
                <div className={'event__main__info__right'}>
                    <h1>{title}</h1>
                    {eventPagePath==='/info' && <EventPageInfo
                        date={date}
                        place={place}
                        text={text}
                        price={price}
                        city={city}
                    />}
                    {eventPagePath==='/booking' && <EventPageBooking title={title}/>}
                    {eventPagePath==='/payment' && <EventPagePayment/>}
                    {eventPagePath==='/final' && <EventPageFinal/>}
                </div>



            </div>



        </div>
    );
};

export default EventPage;