import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';

export const CloseIco = CloseIcon;

export const [
    TextFieldsIco,
    CreateIco,
    NoteIco,
    MusicNoteIco,
    AttachFileIco,
    CropIco,
    TimerIco,
    SendIco
] =
    [TextFieldsIcon,
        CreateIcon,
        NoteIcon,
        MusicNoteIcon,
        AttachFileIcon,
        CropIcon,
        TimerIcon,
        SendIcon]

export const MainPrev = styled.div`
  position: relative`;

export const ToolRight = styled.div`
  color: white;
  position: absolute;
  left: 215px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  > .MuiSvgIcon-root {
    margin: 5px;
    font-size: 18px;
    color: white;
    transition: all .5s ease;
    border-radius: 999px;
    padding: 4px;
  }

  > .MuiSvgIcon-root:hover {
    border: 1px solid white;

  }
`;

export const SendBtn = styled.div`
  background-color: yellow;
  position: absolute;
  bottom: 25px;
  color: black;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  padding: 10px;
  transition: all .3s ease-in-out;

  > .MuiSvgIcon-root {
    font-size: small !important;
    padding: 2px;
    margin-left: 2px;
  }

  > h4 {
    margin-right: 1px;
    font-size: 12px;
    font-weight: 700;
  }

  :hover {
    background-color: rgba(220, 220, 17, 0.61);
    color: white;
  }`

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

// eslint-disable-next-line
export default {
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
    ToolLeft,
    SendIco,
    SendBtn

}
