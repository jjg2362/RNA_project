import React from "react";

import * as Styled from "./style";
import SignInForm from "../../organisms/LoginForm/SignInForm";
import Title, { Size, Weight } from "../../atoms/Title/Title";

const SignIn = () => {
  return (
    <Styled.SignContainer>
      <Title size={Size.m} weight={Weight.m}>
        이메일<span>로 로그인하세요</span>
      </Title>
      <SignInForm />
    </Styled.SignContainer>
  );
};

export default SignIn;
