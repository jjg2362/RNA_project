import styled from "styled-components";
import { StarFilled, ArrowRightOutlined } from "@ant-design/icons";

import { MAIN_COLOR } from "../../../public/color";
import { TEXT_M, TEXT_S } from "../../../public/font";

export const FavoriteIcon = styled(StarFilled)`
  color: ${MAIN_COLOR};
  font-size: ${TEXT_M};
  padding-right: 5px;
`;

export const ArrowIcon = styled(ArrowRightOutlined)`
  font-size: ${TEXT_S};
  padding-right: 5px;
`;
