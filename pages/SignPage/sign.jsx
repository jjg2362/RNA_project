import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

import * as Styled from "./style";
import SignInForm from "../../components/templates/SignIn";
import SignUpForm from "../../components/templates/SignUp";

const sign = () => {
  const { isSignIn } = useSelector((state) => state.signReducer);
  const { me } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (me) {
      alert("로그인했으니 메인페이지로 이동합니다.");
      Router.push("/");
    }
  }, [me && me.id]);

  return (
    <>
      <Styled.SignView>
        {/* 로그인, 회원가입 영역 */}
        <Styled.LeftContainer>
          <Styled.SignContainer isSignIn={!isSignIn}>
            <SignInForm />
          </Styled.SignContainer>
          <Styled.SignContainer isSignIn={isSignIn}>
            <SignUpForm />
          </Styled.SignContainer>
        </Styled.LeftContainer>
        {/* 배경 이미지 영역 */}
        <Styled.RightContainer>
          <Styled.SignBackground />
        </Styled.RightContainer>
      </Styled.SignView>
    </>
  );
};

export default sign;
