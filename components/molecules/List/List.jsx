import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const Order = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  between: "space-between",
};

const List = ({ children, card, width = "100%", order = Order.left }) => {
  return (
    <Styled.List card={card} order={order} width={width}>
      {children}
    </Styled.List>
  );
};

List.propTypes = {
  children: propTypes.node.isRequired,
  width: propTypes.string,
  order: propTypes.string,
};

export default List;
