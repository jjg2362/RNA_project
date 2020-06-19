import styled from "styled-components";
import { MAIN_COLOR } from "../../../public/color";

const FORM_WIDTH = "418px";

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${FORM_WIDTH};
`;

export const SignMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  & > a {
    text-decoration: underline;
  }
  & > a:first-child {
    position: relative;
    margin-right: 2rem;
    &:after {
      content: "";
      position: absolute;
      top: 4px;
      right: -12px;
      width: 1px;
      height: 12px;
      background-color: ${MAIN_COLOR};
    }
  }
`;
