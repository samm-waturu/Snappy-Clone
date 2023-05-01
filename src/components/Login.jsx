import React from 'react'
import {useDispatch} from "react-redux";
import {MainLogin, InnerContainer} from "../components-styles/Login-Style";
import SnapLogo from '../img/snapchat.png'
import {Button} from "@mui/material";
import {auth, provider} from "../firebase/firebase";
import {login} from "../features/appSlice";
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const dir ='/chats';
    const dispatch = useDispatch()
    //dispatching or pushing login information into the data layer, by using auth, which
    //returns a promise, an object with data from Google auth API
    const signIn = () => {
        auth.signInWithPopup(provider).then(
            ({
                 user
             }) => {
                dispatch(login({
                    username: user.displayName,
                    profilePic:user.photoURL,
                    id: user.uid
                }));
                navigate(dir, {
                    option: {
                        replace: true
                    }
                })
            }

        )
            .catch(() => {
                console.log(`Login unsuccessful`)
            });
    };
    return (
        <MainLogin>
            <InnerContainer>
                <img src={SnapLogo} alt='Snap-logo'/>
                <Button variant={'outlined'} onClick={signIn}> Sign In</Button>
            </InnerContainer>
        </MainLogin>
    )
}

export default Login
