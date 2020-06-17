import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const Order = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  between: "space-between",
};

const ListItem = ({ children, order = "auto" }) => {
  return <Styled.ListItem order={order}>{children}</Styled.ListItem>;
};

ListItem.prototype = {
  children: propTypes.node.isRequired,
};

export default ListItem;
