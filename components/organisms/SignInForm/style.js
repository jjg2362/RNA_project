import styled from "styled-components";
import { DARK_GRAY } from "../../../public/color";

export const SignForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  & > label {
    display: inline-block;
    margin-bottom: 18px;
    line-height: 24px;
    font-weight: 500;
    color: ${DARK_GRAY};
  }
`;
