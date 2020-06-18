import styled from "styled-components";
import { MAIN_COLOR, LIGHT_MAIN_COLOR, WHITE } from "../../../public/color";
import { TEXT_M } from "../../../public/font";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${TEXT_M};
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
