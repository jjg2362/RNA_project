import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import {
  WEIGHT_S,
  WEIGHT_M,
  WEIGHT_L,
  WEIGHT_XL,
  TEXT_S,
  TEXT_M,
  TEXT_L,
} from "../../../public/font";
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
  s: WEIGHT_S,
  m: WEIGHT_M,
  l: WEIGHT_L,
  xl: WEIGHT_XL,
};

const A = ({
  children,
  type = AType.normal,
  size = ASize.m,
  weight = AWeight.m,
  hoverEffect = false,
  href,
  onClick,
}) => {
  return (
    <Styled.A
      type={type}
      size={size}
      weight={weight}
      hoverEffect={hoverEffect}
      href={href}
      onClick={onClick}
    >
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
  href: propTypes.string,
  onClick: propTypes.func,
};

export default A;
