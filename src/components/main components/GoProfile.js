import React, {useEffect, useState} from 'react';
import GidProfile from "./GidProfile";
import Autorization from "./Autorization";
import {useSelector} from "react-redux";

const GoProfile = () => {
    const {user} = useSelector(state => state)
    const [state, setState] = useState([user])

    const getComponent = () =>{
        console.log('Юзер из геткомпонент ' + user)
        if(user){
            return <GidProfile/>
            // getComponent()
        } else {
            return <Autorization/>
            //getComponent()
        }
    }
    useEffect(()=>{
        getComponent()
    },[user])
    return (
        <div className={'go__profile__page'}>
            <div className={'about__us__left'}></div>
            <div className={'about__us__right'}></div>
            <div className={'about__us__maininfo'}>
                {getComponent()}
            </div>

        </div>
    );
};

export default GoProfile;



// class GoProfile extends Component {
//     constructor() {
//         super(
//             state{}
//         );
//     }
//     const {user} = useSelector(state => state)
// //const [state, setState] = useState(user)
// // useEffect()
// const getComponent = () =>{
//     console.log('Юзер из гет компонент ' + user)
//     if(user){
//         return <GidProfile/>
//         render()
//     } else {
//         return <Autorization/>
//         render()
//     }
// }
//     render() {
//         return (
//             <div>
//                 {getComponent()}
//             </div>
//         );
//     }
// }
//
// export default GoProfile;