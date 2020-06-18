import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const ItemSelfOrder = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export const ItemJustifyOrder = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
};

export const ItemAlignOrder = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
};

export const ItemDirection = {
  row: "row",
  col: "column",
};

const ListItem = ({
  children,
  self = "auto",
  justify = ItemJustifyOrder.start,
  align = ItemAlignOrder.start,
  direction = ItemDirection.row,
  margin = "0",
}) => {
  return (
    <Styled.ListItem
      self={self}
      justify={justify}
      align={align}
      direction={direction}
      margin={margin}
    >
      {children}
    </Styled.ListItem>
  );
};

ListItem.prototype = {
  children: propTypes.node.isRequired,
  self: propTypes.string,
  justify: propTypes.string,
  align: propTypes.string,
  direction: propTypes.string,
  margin: propTypes.string,
};

export default ListItem;
