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
            <a>
              <Image src="Logo.svg" type={Type.img} />
            </a>
          </Link>
        </Styled.HeaderLeftContainer>

        <Styled.HeaderRightContainer>
          <List align={ListAlignOrder.center}>
            <ListItem margin="4rem" align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.s} weight={AWeight.m}>
                학교
              </A>
            </ListItem>
            <ListItem align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.s} weight={AWeight.m}>
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
