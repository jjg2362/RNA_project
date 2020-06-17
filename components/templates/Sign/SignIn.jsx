import React, { useCallback } from "react";

import * as Styled from "./style";
import SignInForm from "../../organisms/LoginForm/SignInForm";
import Title, { Size, Weight } from "../../atoms/Title/Title";
import { useDispatch } from "react-redux";
import { SIGN_UP } from "../../../reducers/sign";
import { LOGIN_REQUEST } from "../../../reducers/user";

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
      <Title size={Size.m} weight={Weight.m}>
        이메일<span>로 로그인하세요</span>
      </Title>
      <SignInForm />
      <Styled.SignMenu>
        <a>비밀번호찾기</a>
        <a onClick={onClickToSignUp}>회원가입</a>
      </Styled.SignMenu>
    </Styled.SignContainer>
  );
};

export default SignIn;
