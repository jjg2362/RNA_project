import styled from "styled-components";

import { BG_COLOR } from "../../../public/color";

const NAV_WIDTH = "210px";

export const LandingView = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BG_COLOR};
  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex: 0 1 ${NAV_WIDTH};
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;
export const ContentContainer = styled.section`
  display: flex;
  /* align-items: center; */
  flex: 1;
  flex-direction: column;
  /* align-content: space-between; */
  margin-left: 3rem;
`;
