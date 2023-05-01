import React, {useEffect} from 'react'
import {ChatViewHead, ToolLeft, BackIco, ToolRight} from "../components-styles/Chat-View-Style";
import {useSelector} from "react-redux";
import {selectCurrChat} from "../features/appSlice";
import {useNavigate} from "react-router-dom"
import {CountdownCircleTimer} from "react-countdown-circle-timer";

function ChatView() {

    const selectedChat = useSelector(selectCurrChat);

    console.log(selectedChat)

    const dir = '/chats';
    // const dir2 = '/';

    const navigate = useNavigate()

    const exit = () => {
        navigate(dir, {
            option: {
                replace: true
            }
        })
    }

    useEffect(() => {
        if (!selectedChat) {
            exit()
        }
    })

    //Selecting the state

    return (
        <ChatViewHead>
            <ToolLeft>
                <BackIco onClick={exit}/>
            </ToolLeft>
            <ToolRight>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    strokeWidth={3}
                    size={30}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}>

                    {({remainingTime}) => {
                        if(remainingTime === 0) {
                            exit()
                        }
                        return remainingTime
                    }}

                </CountdownCircleTimer>
            </ToolRight>
            <img src={selectedChat} alt="Uploaded image"/>
        </ChatViewHead>
    )
}

export default ChatView
