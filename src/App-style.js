import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefc01;
  height: 100vh;
`;

export const PhoneBg = styled.div`
> img{
  background: no-repeat center;
  background-size: contain;
  height: 400px;
  padding: 74px;
}
`

// eslint-disable-next-line
export default {MainBody, PhoneBg}