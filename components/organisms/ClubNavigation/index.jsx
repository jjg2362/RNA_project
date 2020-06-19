import React from "react";

import * as Styled from "./style";
import List, { ListDirection, ListAlignOrder } from "../../molecules/List";
import ListItem, {
  ItemDirection,
  ItemAlignOrder,
  ItemJustifyOrder,
} from "../../molecules/ListItem";
import Image, { Type } from "../../atoms/Image";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import P, { PSize, PWeight, PType } from "../../atoms/P";

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
        width="100%"
      >
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            동아리 회장
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.leader}
          </P>
        </ListItem>
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            인원수
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.heads}
          </P>
        </ListItem>
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            누적인원
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.totalHeads}
          </P>
        </ListItem>
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            설립일
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.founded}
          </P>
        </ListItem>
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            기수
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.numeral}
          </P>
        </ListItem>
        <ListItem justify={ItemJustifyOrder.between}>
          <P size={PSize.s} weight={PWeight.s}>
            장소
          </P>
          <P size={PSize.s} weight={PWeight.s}>
            {dummyData.place}
          </P>
        </ListItem>
      </List>
    );
  };

  return (
    <Styled.NavContainer>
      <List
        width="100%"
        direction={ListDirection.col}
        align={ListAlignOrder.center}
        margin="2rem"
      >
        <ListItem direction={ItemDirection.col} align={ItemAlignOrder.center}>
          <Image
            marginBottom="2rem"
            type={Type.img}
            src="clubLogo.jpg"
            circle={true}
          />
          <Title size={TitleSize.xs} weight={TitleWeight.l}>
            동국대학교
          </Title>
          <P
            weight={PWeight.m}
            size={PSize.s}
            type={PType.gray}
            marginBottom="2rem"
          >
            DNA
          </P>
        </ListItem>
        <ListItem>{renderClubInformation()}</ListItem>
      </List>
    </Styled.NavContainer>
  );
};

export default ClubNavigation;
