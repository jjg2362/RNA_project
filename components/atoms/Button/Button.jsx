import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

const Button = ({ children, onClick, width = "60px", height = "30px" }) => {
  return (
    <Styled.Button width={width} height={height} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

Button.prototype = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  width: propTypes.string,
  height: propTypes.string,
};

export default Button;
