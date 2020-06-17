import styled from "styled-components";
import { DARK_GRAY } from "../../../public/color";

export const Title = styled.h1`
  font-size: ${(props) => props.style.fontSize};
  font-weight: ${(props) => props.style.fontWeight};

  & > span {
    color: ${DARK_GRAY};
  }
`;
