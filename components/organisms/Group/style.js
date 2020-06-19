import styled from "styled-components";
import { WARNING, WHITE } from "../../../public/color";

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
  width: 40px;
  height: 22px;
  background-color: ${WARNING};
  border-radius: 5px;
  color: ${WHITE};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const GroupInformationList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
`;
