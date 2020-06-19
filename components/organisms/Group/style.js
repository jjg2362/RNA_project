import styled from "styled-components";
import { WARNING, WHITE, LIGHT_GRAY } from "../../../public/color";

export const GroupContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GroupState = styled.span`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  background-color: ${WARNING};
  border-radius: 5px;
  color: ${WHITE};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const GroupTitleBorder = styled.span`
  width: 100%;
  height: 1px;
  background-color: LIGHT_GRAY;
`;

export const GroupInformationList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
`;
