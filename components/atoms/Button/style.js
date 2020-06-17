import styled from "styled-components";
import { MAIN_COLOR, LIGHT_MAIN_COLOR, WHITE } from "../../../public/color";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-transform: uppercase;
  color: ${WHITE};
  background-color: ${MAIN_COLOR};
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${LIGHT_MAIN_COLOR};
  }
`;
