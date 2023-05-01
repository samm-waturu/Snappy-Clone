import styled from "styled-components";

export const MainLogin  = styled.div`
background-color: yellow;
display: grid;
place-items: center;
height: 100vh;
width: 100%`;
export const InnerContainer  = styled.div`
  display: flex;
  width: 600px;
  height: 200px;
  flex-direction: column;
> img {
  height: 270px;
  object-fit: contain
}`;

export default {MainLogin, InnerContainer};