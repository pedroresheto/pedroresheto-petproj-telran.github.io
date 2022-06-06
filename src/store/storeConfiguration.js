import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";


let userLocStorage = localStorage.getItem('user')

const initialState = {
    path:'/main',
    user: userLocStorage,
    title: 'Title1',
    eventPagePath: '/info',
    imageLink:'',
    date:'',
    description:'',
    place:'',
    text:'',
    price:'',
    city:''
}

const store = createStore(rootReducer, initialState)
export default store;