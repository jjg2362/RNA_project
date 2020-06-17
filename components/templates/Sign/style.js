import styled from "styled-components";
import { MAIN_COLOR } from "color";

const FORM_WIDTH = "418px";

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${FORM_WIDTH};
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
