import styled from "styled-components";

import { NORMAL_GRAY, DARK_GRAY, MAIN_COLOR } from "../../../public/color";
import { TEXT_S } from "../../../public/font";

export const Input = styled.input`
  background-image: none;
  border: 0;
  -webkit-appearance: none;

  border-bottom: 1px solid ${NORMAL_GRAY};
  width: 100%;
  font-size: ${TEXT_S};
  color: ${DARK_GRAY};
  transition: border-color 0.3s ease;
  margin-bottom: ${(props) => props.marginBottom};
  &:focus {
    outline: none;
    border-color: ${MAIN_COLOR};
  }
  &::placeholder {
    color: ${NORMAL_GRAY};
  }
`;
