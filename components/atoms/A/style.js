import styled, { css } from "styled-components";
import { MAIN_COLOR } from "../../../public/color";

export const HoverEffect = css`
  position: relative;
  height: inherit;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    border-radius: 10px;
    transition: box-shadow 0.2s ease;
  }

  &:hover {
    &:after {
      box-shadow: inset -1.7em 0 0 0 ${MAIN_COLOR},
        inset 1.7em 0 0 0 ${MAIN_COLOR};
    }
  }
`;

export const A = styled.a`
  display: inline-block;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.type};
  ${(props) => props.hoverEffect && HoverEffect}
`;
