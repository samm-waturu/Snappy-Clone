import React from 'react'
import {ChatHead, StopIco, ChatInfo} from "../components-styles/Pull-Styles";
import {Avatar} from "@mui/material";
import styled from "styled-components";
import TimeAgo from 'react-timeago'
import {useDispatch} from "react-redux";
import {selectCamImg} from "../features/camSlice";
import {selectChat} from "../features/appSlice";
import {db} from "../firebase/firebase";
import {useNavigate} from "react-router-dom";

function PullChats({profilePic, username, timestamp, imageUrl, read, id}) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dir = '/view'

    const open = () => {
        if (!read) {

            // If read is null trigger the below codes

            dispatch(selectChat(imageUrl));

            //Update a field on click

            db.collection('posts').doc(id).set({
                read: true
            }, {merge: true}).then((success) => {
                navigate(dir, {
                    option: {
                        state: ''
                    }
                })
                // console.log(selectedChat)
            }).catch((error) => {
                console.log(`Err`)
            })
        }
    }

    return (

        <ChatHead>

            <AvtIco src={profilePic} onClick={open}/>

            <h4>{username}</h4>

            <p>
                <b>{!read && `View`}  </b> {' '}


                <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()}/>
            </p>

            {!read && <StopIcoMod/>}
            {/*  If read is null, then display the red icon  */}

        </ChatHead>

    )
}

export default PullChats

const StopIcoMod = styled(StopIco)`
  color: #ed3b55`

const AvtIco = styled(Avatar)`
  height: 28px !important;
  width: 28px !important;`