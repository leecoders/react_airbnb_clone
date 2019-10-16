import React from "react";
import styled from "styled-components";
import styles from "../styles";
import logoImage from "../assets/images/logo.png";

const HeaderWrapper = styled.div`
  position: relative;
  height: 6.5rem;
  border-bottom: 1px solid ${styles.borderColor};
  font-family: "KimNamyun", sans-serif;
`;

const Logo = styled.span`
  position: relative;
  display: inline-block;
  top: 0.7rem;
  left: 0.5rem;
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
  background: url(${logoImage}) no-repeat 50% 50%;
  background-size: 4rem 4rem;
`;

const Title = styled.span`
  position: relative;
  display: inline-block;
  top: 0.9rem;
  left: 0.5rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${styles.titleColor};
`;

const UserContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 1rem;
  font-size: 2.5rem;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <Logo />
        에어비앤비
      </Title>
      <UserContainer>camper 님</UserContainer>
    </HeaderWrapper>
  );
};

export default Header;
