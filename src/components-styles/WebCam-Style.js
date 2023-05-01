import styled from "styled-components";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const RadioIco = RadioButtonUncheckedIcon

export const WebCamHead = styled.div`
  position: relative;
  > Webcam {border: 10px solid red;}
  
  
 > .MuiSvgIcon-root {
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translate(-50%);
   cursor: pointer;
   font-size: xxx-large !important;
   color: white;
 }`;
// eslint-disable-next-line
export const CamShot = styled.div``;
export default {WebCamHead, RadioIco, CamShot}