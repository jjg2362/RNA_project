import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const Input = ({
  type = "text",
  value = "",
  onChangeValue,
  placeholder = "",
  mb = "0",
}) => {
  return (
    <>
      <Styled.Input
        type={type}
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder}
        mb={mb}
      />
    </>
  );
};

Input.prototype = {
  type: propTypes.string,
  value: propTypes.any,
  onChangeValue: propTypes.func,
  placeholder: propTypes.string,
  mb: propTypes.string,
};

export default Input;
