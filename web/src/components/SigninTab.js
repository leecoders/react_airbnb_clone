import React from "react";
import styled from "styled-components";
import styles from "../styles";

const SigninTabWrapper = styled.div`
  z-index: 102;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30rem;
  border-radius: 0.8rem;
  background: #ffffff;
`;
const FormContainer = styled.div`
  position: relative;
  top: 5rem;
  margin: 0 auto;
  width: 40rem;
  height: auto;
`;
const Input = styled.input`
  position: relative;
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  padding: 0 1rem;
  border: 1px solid ${styles.borderColor};
  border-radius: 0.3rem;
  outline: none;
  &:focus {
    border: 1px solid ${styles.primaryColor};
  }
  &::placeholder {
    color: #adb5bd;
    font-family: "KimNamyun", sans-serif;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0;
  height: 4rem;
`;
const SubmitButton = styled.button`
  position: relative;
  top: 0.5rem;
  width: 32.2rem;
  height: 4rem;
  border: 1px solid ${styles.borderColor};
  border-radius: 0.4rem;
  font-family: "KimNamyun", sans-serif;
  font-size: 2rem;
  outline: none;
  color: #ffffff;
  background: ${styles.primaryColor};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;
const FlashMessageContainer = styled.div`
  text-align: start;
  font-size: 1.4rem;
  width: 32rem;
  margin: 0 auto;
  color: ${styles.titleColor};
`;

const SigninTab = () => {
  return (
    <SigninTabWrapper>
      <FormContainer>
        <InputWrapper>
          <Input placeholder={"아이디"} />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder={"비밀번호"} />
        </InputWrapper>
        <FlashMessageContainer>
          사용자 정보를 다시 확인해주세요.
        </FlashMessageContainer>
        <SubmitButton>로그인</SubmitButton>
      </FormContainer>
    </SigninTabWrapper>
  );
};

export default SigninTab;
