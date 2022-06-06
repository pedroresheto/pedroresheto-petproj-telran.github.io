import "firebase/compat/auth";
import {fb} from '../config/fireBazeConfig'



export async function login(email, password){
    try {
        const response = await fb.auth().signInWithEmailAndPassword(email, password)
        localStorage.setItem('user', response.user)
        console.log(response.user)
        //return response.user
    }
    catch (error){
        console.log(error.message)
    }
}

export async function logout(){
    fb.auth().signOut()
    localStorage.removeItem('user')
}