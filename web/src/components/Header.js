import React, { useState } from "react";
import styled from "styled-components";
import styles from "../styles";
import logoImage from "../assets/images/logo.png";
import userImage from "../assets/images/user-circle.png";
import UserBox from "./UserBox.js";

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
  top: 0rem;
  right: 0.5rem;
  font-size: 2.5rem;
  padding: 1rem;
`;
const UserButton = styled.span`
  position: relative;
  display: inline-block;
  top: 0.9rem;
  margin-left: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background: url(${userImage}) no-repeat 50% 50%;
  background-size: 3.5rem 3.5rem;
  cursor: pointer;
`;
const BackgroundShadow = styled.div`
  z-index: 100;
  position: fixed;
  top: 6.6rem;
  width: 500rem;
  height: 500rem;
  background: rgba(255, 255, 255, 0.85);
`;

const Header = ({ handleHeaderMenuClick }) => {
  const [visibilityForUserBox, setVisibilityForUserBox] = useState(false);
  return (
    <HeaderWrapper>
      <Title>
        <Logo />
        에어비앤비
      </Title>
      <UserContainer>
        <span>camper</span>
        <span> 님</span>
        <UserButton
          onClick={() => {
            handleHeaderMenuClick();
            setVisibilityForUserBox(!visibilityForUserBox);
          }}
        />
      </UserContainer>
      {visibilityForUserBox && (
        <BackgroundShadow
          onClick={() => {
            setVisibilityForUserBox(!visibilityForUserBox);
          }}
        />
      )}
      {visibilityForUserBox && <UserBox></UserBox>}
    </HeaderWrapper>
  );
};

export default Header;
