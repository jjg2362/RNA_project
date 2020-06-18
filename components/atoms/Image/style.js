import styled, { css } from "styled-components";

export const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  margin-bottom: ${(props) => props.marginBottom};
  ${(props) =>
    props.circle &&
    css`
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
    `};
`;

export const Background = styled.div`
  background: ${(props) => props.src};
  margin-bottom: ${(props) => props.marginBottom};
`;
