import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";
import { TITLE_S, TITLE_M, TITLE_L } from "../../../public/font";
import { BLACK, MAIN_COLOR, DARK_GRAY, WARNING } from "../../../public/color";

export const TitleType = {
  normal: BLACK,
  primary: MAIN_COLOR,
  gray: DARK_GRAY,
  warn: WARNING,
};

export const TitleSize = {
  s: TITLE_S,
  m: TITLE_M,
  l: TITLE_L,
};

export const TitleWeight = {
  xs: 100,
  s: 300,
  m: 500,
  l: 700,
};

const Title = ({
  children,
  size = TitleSize.s,
  weight = TitleWeight.m,
  type = TitleType.normal,
  marginBottom = "0px",
}) => {
  return (
    <Styled.Title
      size={size}
      weight={weight}
      type={type}
      marginBottom={marginBottom}
    >
      {children}
    </Styled.Title>
  );
};

Title.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string,
  weight: propTypes.number,
  type: propTypes.string,
  marginBottom: propTypes.string,
};

export default Title;
