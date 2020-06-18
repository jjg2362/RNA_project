import styled from "styled-components";

export const Span = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.type};
  margin-bottom: ${(props) => props.marginBottom};
`;
