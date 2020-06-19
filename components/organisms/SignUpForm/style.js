import styled from "styled-components";
import { DARK_GRAY, MAIN_COLOR, WARNING } from "../../../public/color";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export const PasswordShowButton = styled.a`
  position: absolute;
  top: 40%;
  right: 0;
`;

export const EyeIcon = styled(EyeOutlined)`
  color: ${MAIN_COLOR};
`;

export const EyeSlashIcon = styled(EyeInvisibleOutlined)`
  color: ${MAIN_COLOR};
`;

export const CheckText = styled.p`
  position: relative;
  padding-left: 1rem;
  margin-right: 4rem;
  translate: all 0.3s ease;
  /* line-height: 28px; */
  color: ${(props) => (props.checked ? `${MAIN_COLOR}` : `${WARNING}`)};
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.checked ? `${MAIN_COLOR}` : `${WARNING}`};
  }
`;
