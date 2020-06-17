import React from "react";

import * as Styled from "./style";

export const Size = {
  s: "20px",
  m: "24px",
  l: "28px",
};
export const Weight = {
  xs: 100,
  s: 300,
  m: 500,
  l: 700,
};

const Title = ({ children, size = Size.s, weight = Weight.m }) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
  };

  return <Styled.Title style={style}>{children}</Styled.Title>;
};

export default Title;
