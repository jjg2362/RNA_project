import styled from "styled-components";
import { DARK_GRAY, MAIN_COLOR } from "../../../public/color";
import {} from "../../../public/font";

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

export const SignMenu = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  & > a {
    color: ${MAIN_COLOR};
    text-decoration: underline;
  }
  & > a:first-child {
    position: relative;
    margin-right: 20px;
    &:after {
      content: "";
      position: absolute;
      top: 4px;
      right: -12px;
      width: 1px;
      height: 18px;
      background-color: ${MAIN_COLOR};
    }
  }
`;
