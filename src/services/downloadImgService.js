import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";



export async function downloadImage(file) {
    let link = '';
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
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
            })
            // }).then(data=> JSON.stringify(data))
        }
    )
};

