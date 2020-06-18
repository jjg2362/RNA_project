import React from "react";

import * as Styled from "./style";
import List from "../../molecules/List";
import ListItem from "../../molecules/ListItem";
import Image, { Type } from "../../atoms/Image";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import P, { PSize, PWeight } from "../../atoms/P";

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
      <></>
      //   <List card={true} order={ListOrder.center}>
      //     <List>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           동아리 회장
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.leader}
      //         </P>
      //       </ListItem>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           인원수
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.heads}
      //         </P>
      //       </ListItem>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           누적인원
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.totalHeads}
      //         </P>
      //       </ListItem>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           설립일
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.founded}
      //         </P>
      //       </ListItem>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           기수
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.numeral}
      //         </P>
      //       </ListItem>
      //       <ListItem className="justifyBetween">
      //         <P size={PSize.s} weight={PWeight.s}>
      //           장소
      //         </P>
      //         <P size={PSize.s} weight={PWeight.s}>
      //           {dummyData.place}
      //         </P>
      //       </ListItem>
      //     </List>
      //   </List>
    );
  };

  return (
    <Styled.NavContainer>
      {/* <List order={ListOrder.center}>
        <ListItem className="flexColumn alignCenter mb20">
          <Image
            className="mb20"
            type={Type.img}
            src="clubLogo.jpg"
            circle={true}
          />
          <Title weight={TitleWeight.l}>동국대학교</Title>
          <P weight={PWeight.m} size={PSize.s}>
            DNA
          </P>
        </ListItem>
        <ListItem>{renderClubInformation()}</ListItem>
      </List> */}
    </Styled.NavContainer>
  );
};

export default ClubNavigation;
