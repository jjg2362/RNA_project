import styled, { keyframes, css } from "styled-components";
import BG from "../../public/assets/images/pattern.svg";
import { WHITE } from "../../public/color";

const BG_WIDTH = "776px";
const BG_HEIGHT = "780px";

export const SignView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
`;

export const SignBackground = styled.div`
  width: ${BG_WIDTH};
  height: ${BG_HEIGHT};
  background-image: url(${BG});
  background-size: cover;
`;

export const LeftContainer = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${WHITE};
  flex-direction: column;
`;

const DisappearSignForm = keyframes`
 0% {
   left: 50%;
   opacity: 1;
 }
 100% {
  opacity: 0;

  left : -50%;
 }
`;

const AppearSignForm = keyframes`
 0% {
   opacity: 0;
   left: -50%;
 }
 100% {
  opacity: 1;

  left : 50%;
 }
`;

export const SignContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  ${(props) =>
    props.isSignIn
      ? css`
          animation: ${DisappearSignForm} 0.6s ease-in-out forwards;
        `
      : css`
          animation: ${AppearSignForm} 0.6s ease-in-out forwards;
        `};
`;
