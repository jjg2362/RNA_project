import styled, { css } from "styled-components";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

import { WHITE, MAIN_COLOR, DARK_GRAY, BLACK } from "../../../public/color";
import { TEXT_M, TEXT_L } from "../../../public/font";

const NAV_WIDTH = "283px";
const INTERVAL = "30px";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 89px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: ${WHITE};
  z-index: 100;
`;

export const HeaderLeftContainer = styled.div`
  flex: 0 1 ${NAV_WIDTH};
  border-right: 1px solid #f0f0f0;
`;

export const HeaderRightContainer = styled.div`
  border-right: 1px solid #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: auto;
  margin-left: ${INTERVAL};
  height: 100%;
`;

export const PageNavContainer = styled.ul`
  display: flex;
  height: inherit;
  & > li {
    margin-right: 40px;
  }
`;

export const SignNavContainer = styled.ul`
  display: flex;
  & > li {
    margin-right: 20px;
  }
`;

export const PageNavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${TEXT_M};
  font-weight: 500;
  height: inherit;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    border-radius: 5px;
    transition: box-shadow 0.2s ease;
  }

  &:hover {
    &:after {
      box-shadow: inset -1.5em 0 0 0 ${MAIN_COLOR},
        inset 1.5em 0 0 0 ${MAIN_COLOR};
    }
  }
`;

const Icon = css`
  color: ${BLACK};
  font-size: ${TEXT_L};
`;

export const LoginIcon = styled(LoginOutlined)`
  ${Icon}
`;
export const LogoutIcon = styled(LogoutOutlined)`
  ${Icon}
`;
export const MyPageIcon = styled(UserOutlined)`
  ${Icon}
`;
