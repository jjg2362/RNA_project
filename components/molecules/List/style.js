import styled, { css } from "styled-components";
import { WHITE } from "../../../public/color";

export const Card = css`
  background-color: ${WHITE};
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: auto;
  ${(props) => props.card && Card};
`;
