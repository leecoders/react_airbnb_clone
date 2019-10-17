import React from "react";
import styled from "styled-components";
import styles from "../styles";

const SigninTabWrapper = styled.div`
  z-index: 102;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 34rem;
  border-radius: 0.8rem;
  background: #ffffff;
`;
const FormContainer = styled.div`
  position: relative;
  margin: 0 auto;
  top: 3rem;
  width: 40rem;
  height: 20rem;
  border: 1px solid black;
`;
const IdWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 35rem;
  height: 8rem;
  border: 1px solid black;
`;
const IdInput = styled.input`
  position: relative;
  left: 5rem;
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
`;
const PasswordInput = styled.input`
  position: relative;
  left: 5rem;
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
`;
const PasswordWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 35rem;
  height: 8rem;
  border: 1px solid black;
`;
const SubmitButton = styled.button`
  position: relative;
  margin: 0 auto;
  top: 3rem;
  margin-top: 2rem;
  width: 15rem;
  height: 5rem;
  border: 1px solid ${styles.borderColor};
  border-radius: 0.4rem;
  font-family: "KimNamyun", sans-serif;
  font-size: 2.5rem;
  outline: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  &:hover {
    background: ${styles.buttonHoverColor};
  }
  &:active {
    background: ${styles.primaryColor};
  }
`;

const SigninTab = () => {
  return (
    <SigninTabWrapper>
      <FormContainer>
        <IdWrapper>
          <IdInput />
        </IdWrapper>
        <PasswordWrapper>
          <PasswordInput />
        </PasswordWrapper>
      </FormContainer>
      <SubmitButton>로그인</SubmitButton>
    </SigninTabWrapper>
  );
};

export default SigninTab;
