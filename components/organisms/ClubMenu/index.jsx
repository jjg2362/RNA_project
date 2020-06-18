import React from "react";

import * as Styled from "./style";
import List, { ListOrder } from "../../molecules/List";
import ListItem from "../../molecules/ListItem";

const menuItems = [
  {
    id: 1,
    type: "favorite",
    content: "즐겨찾는 게시판",
  },
  {
    id: 2,
    type: "general",
    content: "전체 글보기",
  },
  {
    id: 3,
    type: "class",
    content: "필수사항",
  },
  {
    id: 4,
    type: "general",
    content: "공지사항",
  },
  {
    id: 5,
    type: "general",
    content: "가입인사",
  },
  {
    id: 6,
    type: "class",
    content: "스터디",
  },
  ,
  {
    id: 7,
    type: "general",
    content: "웹 스터디",
  },
  ,
  {
    id: 8,
    type: "general",
    content: "알고리즘 스터디",
  },
];

const ClubMenu = () => {
  let renderMenuList = (menuData) => (
    <List card={true} order={ListOrder.left}>
      <ListItem></ListItem>
    </List>
  );

  return (
    <List card={true} order={ListOrder.left}>
      <ListItem></ListItem>
    </List>
  );
};

export default index;
