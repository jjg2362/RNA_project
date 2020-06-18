import styled from "styled-components";

const NAV_WIDTH = "210px";

export const NavContainer = styled.nav`
  display: flex;
  flex: 0 1 ${NAV_WIDTH};
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const ClubInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 240px;
`;
