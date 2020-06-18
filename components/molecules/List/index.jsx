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
  justify = ListJustifyOrder.start,
  align = ListAlignOrder.start,
  direction = ListDirection.row,
}) => {
  return (
    <Styled.List
      card={card}
      width={width}
      justify={justify}
      align={align}
      direction={direction}
    >
      {children}
    </Styled.List>
  );
};

List.propTypes = {
  children: propTypes.node.isRequired,
  card: propTypes.bool,
  width: propTypes.string,
  justify: propTypes.string,
  align: propTypes.string,
  direction: propTypes.string,
};

export default List;
