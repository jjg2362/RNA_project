import styled, { css } from "styled-components";
import { DARK_GRAY } from "../../../public/color";

export const Title = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.type};
  margin-bottom: ${(props) => props.marginBottom};
  & > span {
    color: ${DARK_GRAY};
  }
  ${(props) => props.ellipsis && Ellipsis}
`;

const Ellipsis = css`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
