import React from "react";
import propTypes from "prop-types";

import * as Styled from "./style";

export const ListJustifyOrder = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
};

export const ListAlignOrder = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
};

export const ListDirection = {
  row: "row",
  col: "column",
};

const List = ({
  children,
  card = false,
  width = "auto",
  height = "auto",
  justify = ListJustifyOrder.start,
  align = ListAlignOrder.start,
  direction = ListDirection.row,
  margin = "0",
}) => {
  return (
    <Styled.List
      card={card}
      width={width}
      height={height}
      justify={justify}
      align={align}
      direction={direction}
      margin={margin}
    >
      {children}
    </Styled.List>
  );
};

List.propTypes = {
  children: propTypes.node.isRequired,
  card: propTypes.bool,
  width: propTypes.string,
  height: propTypes.string,
  justify: propTypes.string,
  align: propTypes.string,
  direction: propTypes.string,
  margin: propTypes.string,
};

export default List;
