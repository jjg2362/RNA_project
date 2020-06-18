import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const Input = ({
  marginBottom = "0px",
  type = "text",
  value = "",
  onChange,
  onFocus,
  placeholder = "",
}) => {
  return (
    <>
      <Styled.Input
        marginBottom={marginBottom}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </>
  );
};

Input.prototype = {
  marginBottom: propTypes.string,
  type: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  placeholder: propTypes.string,
};

export default Input;
