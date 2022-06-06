import React, {useState} from 'react';
import ListEvents from "./main components/ListEvents";
import Autorization from "./main components/Autorization";
import {useSelector} from "react-redux";
import GidProfile from "./main components/GidProfile";
import CreateEvent from "./main components/CreateEvent";
import GoProfile from "./main components/GoProfile";
import AboutUs from "./main components/AboutUs";
import EventPage from "./main components/EventPage";
import Attention from "./main components/Attention";


const Main = () => {

    //const [state, setState] = useState({path:'/main'});
    const {path} = useSelector(state => state)
    return (
            <div>
                {path === '/main' && <ListEvents />}
                {/*{path === '/login' && <Autorization />}*/}
                {/*{path === '/gidprofile' && <GidProfile/>}*/}
                {path === '/createevent' && <CreateEvent/>}
                {path === '/goprofile' && <GoProfile/>}
                {path === '/about' && <AboutUs/>}
                {path === '/eventpage' && <EventPage/>}
                {path === '/attention' && <Attention/>}
            </div>



    );
};

export default Main;