import React, { useState, useCallback, useEffect } from "react";

import * as Styled from "./style";
import * as SingStyled from "../SignInForm/style";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

import useInput from "../../../hooks/useInput";

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordCheckFocus, setPasswordCheckFocus] = useState(false);

  const [emailCheck, setEmailCheck] = useState(false);
  const [nameInputCheck, setNameInputCheck] = useState(false);
  const [passwordEqualCheck, setPasswordEqualCheck] = useState(false);
  const [passwordLengthCheck, setPasswordLengthCheck] = useState(false);
  const [
    passwordSpecialCharacterCheck,
    setPasswordSpecialCharacterCheck,
  ] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordCheckShow, setPasswordCheckShow] = useState(false);

  const onFocusEmail = useCallback(() => {
    setEmailFocus(true);
  }, []);
  const onFocusName = useCallback(() => {
    setNameFocus(true);
  }, []);
  const ondFocusPassword = useCallback(() => {
    setPasswordFocus(true);
  }, []);
  const onFocusPasswordCheck = useCallback(() => {
    setPasswordCheckFocus(true);
  }, []);

  const onClickPasswordShowBtn = useCallback(
    (e) => {
      e.preventDefault();
      setPasswordShow(!passwordShow);
    },
    [passwordShow]
  );

  const onClickPasswordCheckShowBtn = useCallback(
    (e) => {
      e.preventDefault();
      setPasswordCheckShow(!passwordCheckShow);
    },
    [passwordCheckShow]
  );

  useEffect(() => {
    if (email.includes("@") && email.includes(".")) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }, [email]);

  useEffect(() => {
    const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const englishCheck = /^[a-zA-Z]*$/;
    if (
      (koreanCheck.test(name) || englishCheck.test(name)) &&
      name.length > 0
    ) {
      setNameInputCheck(true);
    } else {
      setNameInputCheck(false);
    }
  }, [name]);

  //옳바른 비밀번호인지 확인한다. 비밀번호를 입력할때마 함수 실행
  useEffect(() => {
    if (password.length >= 8) {
      setPasswordLengthCheck(true);
    } else {
      setPasswordLengthCheck(false);
    }

    if (
      password.includes("?") |
      password.includes("@") |
      password.includes("!")
    ) {
      setPasswordSpecialCharacterCheck(true);
    } else {
      setPasswordSpecialCharacterCheck(false);
    }
  }, [password]);

  //비밀번호와 비밀번호 확인이 같은지 확인한다. 비밀번호 확인 입력시 함수 실행
  useEffect(() => {
    if (password == passwordCheck && password.length > 0) {
      setPasswordEqualCheck(true);
    } else {
      setPasswordEqualCheck(false);
    }
  }, [passwordCheck, password]);

  return (
    <SingStyled.SignForm>
      {/* 이메일 */}
      <SingStyled.InputContainer>
        <label htmlFor="input-email">이메일</label>
        <Input
          id="input-email"
          value={email}
          onChange={onChangeEmail}
          placeholder="rna123@email.com"
          onFocus={onFocusEmail}
          required
        ></Input>
        <Styled.CheckContainer visible={emailFocus}>
          <Styled.CheckText checked={emailCheck}>이메일 형식</Styled.CheckText>
        </Styled.CheckContainer>
      </SingStyled.InputContainer>
      {/* 이름 */}
      <SingStyled.InputContainer>
        <label htmlFor="input-name">이름</label>
        <Input
          id="input-name"
          value={name}
          onChange={onChangeName}
          placeholder="홍길동"
          onFocus={onFocusName}
          required
        ></Input>
        <Styled.CheckContainer visible={nameFocus}>
          <Styled.CheckText checked={nameInputCheck}>
            올바른 이름 입력
          </Styled.CheckText>
        </Styled.CheckContainer>
      </SingStyled.InputContainer>
      {/* 비밀번호 */}
      <SingStyled.InputContainer>
        <label htmlFor="input-password">비밀번호</label>
        <Input
          id="input-password"
          type={passwordShow ? "text" : "password"}
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호 입력"
          onFocus={ondFocusPassword}
          required
        ></Input>
        <Styled.PasswordShowButton onClick={onClickPasswordShowBtn}>
          {passwordShow ? <Styled.EyeSlashIcon /> : <Styled.EyeIcon />}
        </Styled.PasswordShowButton>

        <Styled.CheckContainer visible={passwordFocus}>
          <Styled.CheckText checked={passwordLengthCheck}>
            8자 이상
          </Styled.CheckText>
          <Styled.CheckText checked={passwordSpecialCharacterCheck}>
            특수문자 1자 이상(!, ?, @)
          </Styled.CheckText>
        </Styled.CheckContainer>
      </SingStyled.InputContainer>
      {/* 비밀번호 획인 */}
      <SingStyled.InputContainer>
        <label htmlFor="input-passwordCheck">비밀번호 확인</label>
        <Input
          id="input-passwordCheck"
          type={passwordCheckShow ? "text" : "password"}
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder="비밀번호 확인"
          onFocus={onFocusPasswordCheck}
          required
        ></Input>
        <Styled.PasswordShowButton onClick={onClickPasswordCheckShowBtn}>
          {passwordCheckShow ? <Styled.EyeSlashIcon /> : <Styled.EyeIcon />}
        </Styled.PasswordShowButton>
        <Styled.CheckContainer visible={passwordCheckFocus}>
          <Styled.CheckText checked={passwordEqualCheck}>
            비밀번호 일치
          </Styled.CheckText>
        </Styled.CheckContainer>
      </SingStyled.InputContainer>
      <Button width="100%" height="60px">
        회원가입
      </Button>
    </SingStyled.SignForm>
  );
};

export default SignUpForm;
