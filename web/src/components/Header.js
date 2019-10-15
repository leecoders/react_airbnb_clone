import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
  height: 8rem;
  border-bottom: 1px solid #dee2e6;
`;

const Title = styled.div`
  position: relative;
  top: 2.7rem;
  left: 1rem;
  font-family: "Orbitron", sans-serif;
  font-size: 3.5rem;
  color: rgb(255, 90, 95);
`;

const UserContainer = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>AIRBNB</Title>
      <UserContainer>camper 님</UserContainer>
    </HeaderWrapper>
  );
};

export default Header;
