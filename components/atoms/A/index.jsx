import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { TEXT_S, TEXT_M, TEXT_L } from "../../../public/font";
import { BLACK, MAIN_COLOR, DARK_GRAY, WARNING } from "../../../public/color";

export const AType = {
  normal: BLACK,
  primary: MAIN_COLOR,
  gray: DARK_GRAY,
  warn: WARNING,
};

export const ASize = {
  s: TEXT_S,
  m: TEXT_M,
  l: TEXT_L,
};

export const AWeight = {
  xs: 100,
  s: 300,
  m: 500,
  l: 700,
};

const A = ({
  children,
  type = AType.normal,
  size = ASize.m,
  weight = AWeight.m,
  hoverEffect = false,
}) => {
  return (
    <Styled.A type={type} size={size} weight={weight} hoverEffect={hoverEffect}>
      {children}
    </Styled.A>
  );
};

A.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
  size: propTypes.string,
  weight: propTypes.number,
  hoverEffect: propTypes.bool,
};

export default A;
