import styled from "styled-components";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


export const [BackIco] = [ArrowBackRoundedIcon]

export const ChatViewHead = styled.div`
position: relative;
`;

export const ToolRight = styled.div`
  color: white;
  font-size: 12px;
  position: absolute;
  left: 210px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
`;

export const ToolLeft = styled.div`
  position: relative;

  > .MuiSvgIcon-root {
    cursor: pointer;
    position: absolute;
    margin: 5px;
    font-size: 18px;
    color: white;
    padding: 4px;
    transition: all .5s ease;
    border-radius: 999px;
  }

  .MuiSvgIcon-root:hover {
    border: 1px solid whitesmoke;
`;

export default {ChatViewHead, ToolLeft, BackIco, ToolRight};