import React, {useEffect, useState} from 'react';
import {addEvent} from "../../services/createEventService";
import {useDispatch} from "react-redux";
import {loginAction, mainAction} from "../../actions/rootAction";
import {storage} from "../../config/fireBazeConfig"
import {downloadImage} from "../../services/downloadImgService";
//import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

const CreateEvent = () => {
    const [state, setState] = useState({title:'', time:'',date:'', description:'', text:'',place:'',price:'', city:''})
    const [image, setImage] = useState(null)
    const [img, setImg] = useState("")
    const dispatch = useDispatch()
    // let link=''


    const handleChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }



    async function downloadImage(file) {
        const storage = getStorage();
        console.log(file)
        const metadata = {
            contentType: file.type
        }

        const storageRef = await ref(storage, 'images/' + file.name)
        // const imageRef = ref(storage, 'images')
        // const picOneRef = ref(storage, 'images'+file.name)
        const uploadTask = uploadBytesResumable(storageRef, file, metadata)

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused')
                        break;
                    case 'running':
                        console.log('Upload is running')
                        break;
                }
            },
            (error) => {

                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    console.log(downloadURL)
                        setImg(downloadURL)
                })
                // }).then(data=> JSON.stringify(data))
            }
        )
    };



    function handleUpdate (){
        downloadImage(image)
            // .then(link => {
            // // setState(s=>({...s,img:String(link)}))
            // console.log(link)

        // }).then(data => String(data))
        //     .then(data => {
        //         console.log(typeof data)
        //         return data
        //     })
        //

    }




    return (
        <div className={'create__event'}>
            <h4 onClick={()=>dispatch(loginAction('/goprofile'))}>Обратно в личный кабинет</h4>

            <h1>Создать новое событие</h1>

                <label htmlFor={'eventDate'}>Выберите дату события</label>
                <input type={'date'} id={'eventDate'} value={state.date} min={'2022-04-22'}
                       max={'2022-09-22'} required onChange={e=>setState(s=>({...s, date: e.target.value}))}
                />
            <label htmlFor={'event__time'}>Время:</label>
                <input type={'time'} id={'event__time'} value={state.time}
                       onChange={e=>setState(s=>({...s, time:e.target.value}))}/>

                <input type={'text'} placeholder={'Title'} value={state.title}
                       onChange={e=>setState(s=>({...s, title:e.target.value}))}/>
                <input type={'text'} placeholder={'description'}
                value={state.description} onChange={e=>setState(s=>({...s, description: e.target.value}))}/>

                <input type={'file'} onChange={handleChange}/>

            <button onClick={()=>{
                handleUpdate(image)
            }}>Загрузить фотографию</button>

            <br/>
            <label htmlFor={'event__text'}>Полное описание</label>
            <input type={'text'} placeholder={'Опишите ваш эвент'} value={state.text}
                   onChange={e=>setState(s=>({...s, text: e.target.value}))}/>
            <br/>
            <label htmlFor={'event__place'}>Где встречаемся:</label>
            <input type={'text'} placeholder={'Где встречаемся'} value={state.place}
                   onChange={e=>setState(s=>({...s, place: e.target.value}))}/>
            <label htmlFor={'event__price'}>Стоимость:</label>
            <input  type={'text'} placeholder={'Стоимость'} value={state.price}
                          onChange={e=>setState(s=>({...s, price: e.target.value}))}/>
            <select value={state.city} onChange={e=>setState(s=>({...s, city: e.target.value}))}>
                <option>Tel-Aviv</option>
                <option>Ierusalim</option>
                <option>Ashdod</option>
            </select>


                <br/>
                <button id={'login_button'} onClick={()=>{
                    // setState(s=>({...s,img:img}))
                    addEvent(state.title, state.date,state.time, state.description,img,state.text,state.place,state.price,state.city,'PdxPwBDRMGNmC2hthhRDRKUCs0x1')
                    // dispatch(mainAction('/main'))
                }}>Опубликовать событие</button>
        </div>
    );
};

export default CreateEvent;





