import styled from "styled-components";
import StopRoundedIcon from '@mui/icons-material/StopRounded';

export const [StopIco] = [StopRoundedIcon]

export const ChatHead = styled.div`
  :hover {
    opacity: .8;
    background-color: whitesmoke;
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid whitesmoke;
  

  > p {
    font-size: 11px;
    
  }

  > h4 {
    font-size: 14px;
    font-weight: 600;
    padding-left: 4px;
    flex: 1;
    
  }`;

export const ChatInfo = styled.div``;

export default {ChatHead, ChatInfo, StopIco}