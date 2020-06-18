import React, { useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import * as Styled from "./style";
import { LOGOUT_REQUEST } from "../../../reducers/user";
import Image, { Type } from "../../atoms/Image";
import A, { ASize, AWeight } from "../../atoms/A";
import Container from "../../molecules/Container";
import List, { ListAlignOrder } from "../../molecules/List";
import ListItem, { ItemAlignOrder } from "../../molecules/ListItem";

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
            <ListItem margin="40px" align={ItemAlignOrder.center}>
              <A hoverEffect={true} size={ASize.s} weight={AWeight.s}>
                학교
              </A>
            </ListItem>
            <ListItem align={ItemAlignOrder.center}>
              <a>동아리</a>
            </ListItem>
            {/* <Styled.PageNavItem>학교</Styled.PageNavItem> */}
            {/* <Styled.PageNavItem>동아리</Styled.PageNavItem> */}
          </List>

          <Styled.SignNavContainer>
            {me != null ? (
              <>
                <Styled.PageNavItem>
                  <Styled.MyPageIcon />
                </Styled.PageNavItem>
                <Styled.PageNavItem onClick={onClickLogout}>
                  <Styled.LogoutIcon />
                </Styled.PageNavItem>
              </>
            ) : (
              <Styled.PageNavItem>
                <Link href="/SignPage/sign">
                  <a>
                    <Styled.LoginIcon />
                  </a>
                </Link>
              </Styled.PageNavItem>
            )}
          </Styled.SignNavContainer>
        </Styled.HeaderRightContainer>
      </Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
