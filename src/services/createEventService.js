import {fb} from "../config/fireBazeConfig";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

export async function addEvent(title, date, time, description, img, text, place, price, city, uid){
    const ref = await fb.firestore().collection("isr-guru-events").doc(uid)
    const doc = await ref.get()
    console.log(title)
    console.log(uid)
    if(doc.exists){
        await ref.update({
            tasks: firebase.firestore.FieldValue.arrayUnion( {
                title,
                date,
                time,
                img,
                description,
                text,
                place,
                price,
                city
            })
        })
    } else {
        await ref.set({tasks:[{title}]})
    }
}

export async function getAllEvents(uid){
    const doc = await fb.firestore().collection("isr-guru-events").doc(uid).get()
    if(doc.exists){
        return doc.data()
    } else {
        return {tasks:[]}
    }
}

