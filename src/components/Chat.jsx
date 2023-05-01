import React, {useEffect, useState} from 'react'
import {
    MainChats,
    ChatsHeader,
    ChatsSearch,
    SearchIco,
    ChatBubbleIco,
    ChatWindow,
    HomeIco,
    RecIco
} from "../components-styles/Chat-Style";
import {Avatar} from "@mui/material";
import styled from "styled-components";
import {auth, db} from "../firebase/firebase";
import PullChats from "./PullChats";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../features/appSlice";
import {resCamImg} from "../features/camSlice";

function Chat() {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const [posts, setPosts] = useState([])
    //Runs once when we fetch chat component. & if you listen back to db and get new data, run again

    const navigate = useNavigate()

    const dir = '/'

    const home = () => {
        navigate(dir, {
            option: {
                state: ''
            }
        })
        dispatch(resCamImg())
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(
            snapshot => setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()

            })))
        )
    }, [])

    return (
        <MainChats>
            <ChatsHeader>
                <AvtCustom src={user.profilePic} onClick={() => auth.signOut()} style={{cursor: "pointer"}}/>
                <ChatsSearch>
                    <SearchIco style={{color: "white", fontSize: 14}}/>
                    <input type="text" placeholder={'Friends'}/>
                </ChatsSearch>
                <ChatBubbleIco style={{color: "white", fontSize: 20}}/>
                <HomeIco onClick={home} style={{color: "white", marginLeft: 4, cursor: "pointer"}}/>
            </ChatsHeader>
            {/*<RecCustom onClick={takeSnap}/>*/}
            <ChatWindow>

                {posts.map(({
                                id, data: {
                        profilePic, name, timestamp, imageUrl, read
                    }
                            }) => (
                    <PullChats
                        key={id} id={id} username={name} timestamp={timestamp}
                        imageUrl={imageUrl} read={read} profilePic={profilePic}

                    />
                ))}

            </ChatWindow>
        </MainChats>
    )
}

export default Chat

//Customs

const AvtCustom = styled(Avatar)`
  height: 25px !important;
  width: 25px !important;`

const RecCustom = styled(RecIco)`
  position: absolute;
  background-color: whitesmoke;
  border-radius: 200px;
  color: grey;
  font-size: 40px !important;
  cursor: pointer;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%)`

