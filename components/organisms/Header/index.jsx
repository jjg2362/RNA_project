import React, { useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import * as Styled from "./style";
import { LOGOUT_REQUEST } from "../../../reducers/user";
import Image, { Type } from "../../atoms/Image";
import A, { ASize, AWeight } from "../../atoms/A";
import Container from "../../molecules/Container";
import List, { ListAlignOrder } from "../../molecules/List";
import ListItem, {
  ItemAlignOrder,
  ItemJustifyOrder,
} from "../../molecules/ListItem";

const Header = () => {
  const { me } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onClickLogout = useCallback(() => {
    dispatch({ type: LOGOUT_REQUEST });
  }, []);

  return (
    <Styled.HeaderContainer>
      <Container>
        <Styled.HeaderLeftContainer>
          <Link href="/">
            <A>
              <Image src="Logo.svg" type={Type.img} />
            </A>
          </Link>
        </Styled.HeaderLeftContainer>

        <Styled.HeaderRightContainer>
          <List align={ListAlignOrder.center}>
            <ListItem height="100%" margin="4rem" align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                학교
              </A>
            </ListItem>
            <ListItem height="100%" align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.m} weight={AWeight.l}>
                동아리
              </A>
            </ListItem>
          </List>

          <List align={ListAlignOrder.center}>
            {me != null ? (
              <>
                <ListItem margin="2rem" align={ItemAlignOrder.center}>
                  <Styled.MyPageIcon />
                </ListItem>
                <ListItem align={ItemAlignOrder.center} onClick={onClickLogout}>
                  <Styled.LogoutIcon />
                </ListItem>
              </>
            ) : (
              <ListItem align={ItemAlignOrder.center}>
                <Link href="/SignPage/sign">
                  <a>
                    <Styled.LoginIcon />
                  </a>
                </Link>
              </ListItem>
            )}
          </List>
        </Styled.HeaderRightContainer>
      </Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
