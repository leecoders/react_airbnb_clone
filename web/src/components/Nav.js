import React from "react";
import styled from "styled-components";
import styles from "../styles";

const NavWrapper = styled.div`
  position: relative;
  height: 4.8rem;
  border-bottom: 1px solid ${styles.borderColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
`;

const ButtonContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin-left: 1rem;
  height: 3.2rem;
  width: auto;
  padding: 0 1.5rem;
  border: 1px solid ${styles.borderColor};
  font-family: "KimNamyun", sans-serif;
  font-size: 2rem;
  border-radius: 0.4rem;
  color: ${styles.textColor};
  outline: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  &:hover {
    background: ${styles.buttonHoverColor};
  }
  &:active {
    background: ${styles.primaryColor};
    color: #ffffff;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ButtonContainer>
        <Button>날짜</Button>
        <Button>인원</Button>
        <Button>가격</Button>
      </ButtonContainer>
    </NavWrapper>
  );
};

export default Nav;
