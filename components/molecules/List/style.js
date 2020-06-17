import styled, { css } from "styled-components";
import { DARK_GRAY, MAIN_COLOR } from "../../../public/color";
// import { TEXT_S } from "font";

export const Card = css`
  background-color: ${MAIN_COLOR};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.order};
  width: ${(props) => props.width};
  ${(props) => props.card && Card}
`;
