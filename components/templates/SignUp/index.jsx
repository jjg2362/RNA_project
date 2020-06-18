import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as Styled from "../SignIn/style";
import { SIGN_IN } from "../../../reducers/sign";
import SignUpForm from "../../organisms/SignUpForm";
import Title, { TitleSize, TitleWeight } from "../../atoms/Title";

const SignUp = () => {
  const dispatch = useDispatch();

  const onClickLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({ type: SIGN_IN });
  }, []);

  return (
    <Styled.SignContainer>
      <Title size={TitleSize.m} weight={TitleWeight.m} marginBottom="40px">
        이메일<span>과</span> 비밀번호
        <span>
          를 <br />
          알려주세요!
        </span>
      </Title>
      <SignUpForm />
      <Styled.SignMenu>
        <a>비밀번호찾기</a>
        <a onClick={onClickLogin}>로그인</a>
      </Styled.SignMenu>
    </Styled.SignContainer>
  );
};

export default SignUp;
