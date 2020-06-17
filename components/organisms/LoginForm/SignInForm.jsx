import React from "react";

import * as Styled from "./style";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

import useInput from "../../../hooks/useInput";

const SignInForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <Styled.SignForm>
      <Styled.InputContainer>
        <label htmlFor="input-email">이메일</label>
        <Input
          id="input-email"
          value={id}
          onChange={onChangeId}
          mb="60px"
          required
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <label htmlFor="input-password">비밀번호</label>
        <Input
          id="input-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          mb="60px"
          required
        />
      </Styled.InputContainer>
      <Button>로그인</Button>
    </Styled.SignForm>
  );
};

export default SignInForm;
