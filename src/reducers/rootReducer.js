import {
    CHANGE_USER,
    CREATE_EVENT,
    GO_TO_ABOUT_US,
    GO_TO_GID_PROFIL,
    GO_TO_LOGIN,
    GO_TO_MAIN,
    GO_TO_EVENT, CHANGE_TITLE, CHANGE_EVENT_PATH, CHANGE_IMAGE
} from "../actions/rootAction";


function rootReducer(state, action){
    switch(action.type){
        case GO_TO_LOGIN:
            return {...state, path: action.payload}
        case GO_TO_MAIN:
            return {...state, path: action.payload}
        case GO_TO_GID_PROFIL:
            return {...state, path: action.payload}
        case GO_TO_ABOUT_US:
            return {...state, path: action.payload}
        case CREATE_EVENT:
            return {...state, path: action.payload}
        case GO_TO_EVENT:return {...state, path: action.payload}
        case CHANGE_USER:
            return {...state, user: action.payload}
        case CHANGE_TITLE: return {...state, title: action.payload.title, date: action.payload.date, img: action.payload.img, place: action.payload.place, text: action.payload.text, price:action.payload.price, city: action.payload.city}
        case CHANGE_EVENT_PATH:return {...state, eventPagePath: action.payload}
        case CHANGE_IMAGE:return {...state, imageLink: action.payload}
        default: return state;
    }
}

export default rootReducer