import React from "react";

import * as Styled from "./style";
import ClubMenu from "../ClubMenu";
import List, {
  ListDirection,
  ListJustifyOrder,
  ListAlignOrder,
} from "../../molecules/List";
import ListItem, {
  ItemDirection,
  ItemAlignOrder,
  ItemJustifyOrder,
} from "../../molecules/ListItem";
import Image, { Type } from "../../atoms/Image";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import Span, { SpanSize, SpanWeight, SpanType } from "../../atoms/Span";

const dummyData = {
  leader: "조재권",
  heads: 104,
  totalHeads: 1301,
  founded: "1995.07.12",
  numeral: 12,
  place: "학생회관 211호",
};

const ClubNavigation = () => {
  const renderClubInformation = () => {
    return (
      <List
        card={true}
        direction={ListDirection.col}
        align={ListAlignOrder.center}
        justify={ListJustifyOrder.between}
        width="100%"
        margin="2rem"
      >
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            동아리 회장
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.leader}
          </Span>
        </ListItem>
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            인원수
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.heads}
          </Span>
        </ListItem>
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            누적인원
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.totalHeads}
          </Span>
        </ListItem>
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            설립일
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.founded}
          </Span>
        </ListItem>
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            기수
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.numeral}
          </Span>
        </ListItem>
        <ListItem width="inherit" justify={ItemJustifyOrder.between}>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            장소
          </Span>
          <Span size={SpanSize.s} weight={SpanWeight.m} type={SpanType.gray}>
            {dummyData.place}
          </Span>
        </ListItem>
      </List>
    );
  };

  return (
    <>
      <List
        width="100%"
        direction={ListDirection.col}
        align={ListAlignOrder.center}
      >
        <ListItem direction={ItemDirection.col} align={ItemAlignOrder.center}>
          <Image
            marginBottom="2rem"
            type={Type.img}
            src="clubLogo.jpg"
            circle={true}
          />
          <Title size={TitleSize.xs} weight={TitleWeight.xl}>
            동국대학교
          </Title>
          <Span
            size={SpanSize.s}
            weight={SpanWeight.l}
            type={SpanType.gray}
            marginBottom="2rem"
          >
            DNA
          </Span>
        </ListItem>
        <ListItem width="inherit">{renderClubInformation()}</ListItem>
      </List>
      <ClubMenu />
    </>
  );
};

export default ClubNavigation;
