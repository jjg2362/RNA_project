import styled, { css } from "styled-components";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

import { WHITE, BLACK } from "../../../public/color";
import { TEXT_L } from "../../../public/font";

const NAV_WIDTH = "283px";
const INTERVAL = "3rem";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 89px;
  background-color: ${WHITE};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const HeaderLeftContainer = styled.div`
  flex: 0 1 ${NAV_WIDTH};
  display: flex;
  align-items: center;
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: auto;
  margin-left: ${INTERVAL};
  height: 100%;
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
