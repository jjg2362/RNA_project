import React from "react";

import * as Styled from "./style";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

import useInput from "../../../hooks/useInput";

const SignInForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <Styled.SignForm>
      <Styled.InputContainer>
        <label htmlFor="input-email">이메일</label>
        <Input
          id="input-email"
          marginBottom="60px"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <label htmlFor="input-password">비밀번호</label>
        <Input
          id="input-password"
          marginBottom="60px"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </Styled.InputContainer>
      <Button width="100%" height="60px">
        로그인
      </Button>
    </Styled.SignForm>
  );
};

export default SignInForm;
