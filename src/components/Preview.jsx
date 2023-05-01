import React, {useEffect} from 'react'
import {
    MainPrev,
    CloseIco,
    ToolRight,
    TextFieldsIco,
    CreateIco,
    NoteIco,
    MusicNoteIco,
    AttachFileIco,
    CropIco,
    TimerIco,
    SendIco,
    SendBtn,
    ToolLeft
} from "../components-styles/Preview-Style";
import {useDispatch, useSelector} from "react-redux";
import {resCamImg, selectCamImg} from "../features/camSlice";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import firebase from 'firebase/compat/app';
import {db} from "../firebase/firebase";
import {addDoc, collection} from 'firebase/firestore';
import {getStorage, ref, uploadString, getDownloadURL} from "firebase/storage";
import {selectUser} from "../features/appSlice";

function Preview() {

    const user = useSelector(selectUser)

    const dispatch = useDispatch(selectCamImg)
    const storeImg = useSelector(selectCamImg)
    const backHome = useNavigate();
    const dir = '/';
    const dir2 = '/chats';

    useEffect(() => {
        if (!storeImg) {
            backHome(dir, {
                options: {
                    replace: true
                }
            })
        }
    }, [storeImg])

    const closePreview = () => {
        dispatch(resCamImg())
        backHome(dir, {
            options: {
                replace: true
            }
        })
    }

    const sendPost = () => {

        const id = uuidv4()

        const storage = getStorage()

        const storeRef = ref(storage, `posts/${id}`)

        const uploadTask = uploadString(storeRef, `${storeImg}`, 'data_url').then((snapshot) => {
            getDownloadURL(storeRef).then((downloadUrl) => {
                const initDb = async () => {
                    await addDoc(
                        collection(db, 'posts'), {
                            name: 'samm',
                            imageUrl: downloadUrl,
                            read: false,
                            profilePic: user.profilePic,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        }
                    );
                }
                initDb().then((res) => {
                }).catch((error) => {
                    console.log(`error: ${error}`)

                })
            })

            backHome(dir2, {
                options: {
                    state: ''
                }
            })

        }).catch((error) => {
            console.log(`Upload task unsuccessful`)
        })


        backHome(dir, {
            options: {
                replace: true
            }
        })


    }

    // console.log(storeImg)
    return (
        <MainPrev>
            <ToolRight>
                <TextFieldsIco/>
                <CreateIco/>
                <NoteIco/>
                <MusicNoteIco/>
                <AttachFileIco/>
                <CropIco/>
                <TimerIco/>
            </ToolRight>

            <ToolLeft>
                <CloseIco onClick={closePreview}/>
            </ToolLeft>
            <img src={storeImg} alt=""/>

            <SendBtn onClick={sendPost}>
                <h4>Send</h4>
                <SendIco/>
            </SendBtn>


        </MainPrev>
    )
}

export default Preview
