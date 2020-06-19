import styled from "styled-components";
import { BLACK, DARK_GRAY, MAIN_COLOR } from "../../../public/color";
import { TEXT_M, TEXT_L } from "../../../public/font";

const NOTICE_IMAGE_WIDTH = "336px";
const NOTICE_IMAGE_HEIGHT = "472px";

const INTERVAL = "30px";

export const NoticeContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ContentTitle = styled.h2`
  align-self: flex-start;
  font-weight: 700;
  color: ${BLACK};
  font-size: ${TEXT_M};
  padding: 20px 0 20px 20px;
  margin: 0;
`;

export const NoticeImageContainer = styled.div`
  flex: 0 0 ${NOTICE_IMAGE_WIDTH};
  height: ${NOTICE_IMAGE_HEIGHT};
  overflow: hidden;
  border-radius: 10px;
  margin-right: ${INTERVAL};
`;

export const NoticeInformationText = styled.article`
  overflow-y: scroll;
  a {
    color: ${MAIN_COLOR};
  }
`;
