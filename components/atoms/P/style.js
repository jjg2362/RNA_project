import style from "styled-components";
import styled from "styled-components";

export const P = styled.p`
  font-size: ${(props) => props.style.fontSize};
  font-weight: ${(props) => props.style.fontWeight};
`;
