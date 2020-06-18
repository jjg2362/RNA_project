import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Container.propTypes = {
  children: propTypes.node.isRequired,
};

export default Container;
