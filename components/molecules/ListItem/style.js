import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  width: ${(props) => props.width};
  height: 100%;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  align-self: ${(props) => props.self};
  margin-right: ${(props) => (props.direction === "row" ? props.margin : "0")};
  margin-bottom: ${(props) =>
    props.direction === "column" ? props.margin : "0"};
  &:last-child {
    margin: 0;
  }
`;
