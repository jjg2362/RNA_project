import styled from "styled-components";

import { BG_COLOR } from "../../../public/color";

export const LandingView = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${BG_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  align-content: space-between;
  margin-left: 3rem;
`;
