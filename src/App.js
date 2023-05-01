import React, {useEffect} from 'react';
import {MainBody, PhoneBg} from "./App-style";
import WebCamCapture from "./components/WebCamCapture";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Preview from './components/Preview'
import Chat from "./components/Chat";
import ChatView from "./components/ChatView";
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/appSlice";
import {auth} from "./firebase/firebase";
import Login from './components/Login'
import Bck from './img/Mobile.png'


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    //Persisting login information

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(login({
                    username: user.displayName,
                    profilePic: user.photoURL,
                    id: user.uid
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    //End of login persistence
    return (
            <Router>
                {!user ? (
                    <Login/>
                ) : (
                    <MainBody>
                        <Routes>
                            <Route exact path={'/'} element={<WebCamCapture/>}/>
                            <Route path={'/preview'} element={<Preview/>}/>
                            <Route path={'/chats'} element={<Chat/>}/>
                            <Route path={'/view'} element={<ChatView/>}/>
                        </Routes>
                    </MainBody>
                )}
            </Router>
    );
}
export default App;
