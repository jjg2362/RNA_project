import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

export const Size = {
  s: "12px",
  m: "14px",
  l: "18px",
};

export const Weight = {
  xs: 100,
  s: 300,
  m: 500,
  l: 700,
};

const P = ({ children = "", size = Size.m, weight = Weight.m }) => {
  const style = {
    fontSize: size,
    fontWeight: weight,
  };

  return <Styled.P style={style}>{children}</Styled.P>;
};

P.propTypes = {
  children: propTypes.string,
  size: propTypes.string,
  weight: propTypes.number,
};

export default P;
