import React, { useCallback } from "react";

import * as Styled from "./style";
import SignInForm from "../../organisms/SignInForm";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../../reducers/sign";
import { LOGIN_REQUEST } from "../../../reducers/user";
import A, { ASize, AWeight, AType } from "../../atoms/A";

const SignIn = () => {
  const dispatch = useDispatch();

  const onClickLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_REQUEST });
  }, []);

  const onClickToSignUp = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: SIGN_UP });
  }, []);

  return (
    <Styled.SignContainer>
      <Title size={TitleSize.m} weight={TitleWeight.m} marginBottom="4rem">
        이메일<span>로 로그인하세요</span>
      </Title>
      <SignInForm />
      <Styled.SignMenu>
        <A size={ASize.s} weight={AWeight.m} type={AType.primary}>
          비밀번호찾기
        </A>
        <A
          size={ASize.s}
          weight={AWeight.m}
          type={AType.primary}
          onClick={onClickToSignUp}
        >
          회원가입
        </A>
      </Styled.SignMenu>
    </Styled.SignContainer>
  );
};

export default SignIn;
