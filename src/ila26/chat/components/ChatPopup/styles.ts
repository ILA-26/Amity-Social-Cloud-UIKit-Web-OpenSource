import { styled } from 'styled-components';

export const Popup = styled.div`
  position: fixed;
  bottom: 0px;
  right: 100px;
  :dir(rtl) & {
    left: 100px;
    right: unset;
  }
  height: 70vh;
  width: 30vw;
  z-index: 1;
  box-shadow: 0px 0px 5px lightgray;
  border-radius: 10px;
  overflow: hidden;
`;
