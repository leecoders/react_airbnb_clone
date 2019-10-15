import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: relative;
  height: 4.8rem;
  border-bottom: 1px solid #dee2e6;
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
  border: 1px solid #dee2e6;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.4rem;
  color: #484848;
  outline: none;
  &:hover {
    background: #f1f3f5;
  }
  &:active {
    background: #38d9a9;
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
