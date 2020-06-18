import React from "react";
import propTypes from "prop-types";
import * as Styled from "./style";

const Button = ({
  children,
  width = "60px",
  height = "30px",
  marginBottom = "0px",
  onClick,
}) => {
  return (
    <Styled.Button
      width={width}
      height={height}
      marginBottom={marginBottom}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};

Button.prototype = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  width: propTypes.string,
  height: propTypes.string,
  marginBottom: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
