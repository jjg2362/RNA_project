import styled from "styled-components";
import { DARK_GRAY } from "../../../public/color";

export const Title = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.type};
  margin-bottom: ${(props) => props.marginBottom};
  & > span {
    color: ${DARK_GRAY};
  }
`;
