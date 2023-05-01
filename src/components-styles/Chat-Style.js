import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

export const [SearchIco, ChatBubbleIco, HomeIco, RecIco] = [SearchIcon, ChatBubbleIcon, HomeRoundedIcon, RadioButtonUncheckedRoundedIcon]

export const MainChats = styled.div`
  position: relative;
  height: 400px;
  width: 350px`;

export const ChatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #059ee0;
  height: 50px`;

export const ChatsSearch = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 8px;

  > input {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 12px;
    flex: 1;
    color: white;
  }

  > input::placeholder {
    color: white;
    opacity: 1
  }`;

export const ChatWindow = styled.div`
  height: 400px;
  background-color: white;
  box-shadow: 1px -7px 7px -6px rgba(0, 0, 0, 0.44);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: -6px;
  overflow: scroll;
 ::-webkit-scrollbar {
   display: none;
 }
-ms-overflow-style: none;
scrollbar-width: none`;


// export const

export default {MainChats, SearchIco, ChatBubbleIco, ChatsSearch, ChatWindow, HomeIco, RecIco}