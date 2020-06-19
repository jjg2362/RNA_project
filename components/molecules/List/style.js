import styled, { css } from "styled-components";
import { WHITE } from "../../../public/color";

const Card = css`
  background-color: ${WHITE};
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
`;

const CardShadow = css`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => (props.direction === "row" ? props.margin : "0")};
  margin-bottom: ${(props) =>
    props.direction === "column" ? props.margin : "0"};
  ${(props) => props.card && Card};
  ${(props) => props.shadow && CardShadow};
`;
