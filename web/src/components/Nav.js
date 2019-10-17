import React, { useState } from "react";
import styled from "styled-components";
import styles from "../styles";
import DatePicker from "./DatePicker.js";
import PersonnelPicker from "./PersonnelPicker.js";
import CostPicker from "./CostPicker.js";

const NavWrapper = styled.div`
  position: relative;
  height: 4.8rem;
  border-bottom: 1px solid ${styles.borderColor};
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.1);
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
const ButtonWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
`;
const Button = styled.button`
  position: relative;
  height: 3.2rem;
  width: auto;
  padding: 0 1.5rem;
  border: 1px solid ${styles.borderColor};
  font-family: "KimNamyun", sans-serif;
  font-size: 2rem;
  border-radius: 0.4rem;
  color: ${props => (props.isClicked ? "#ffffff" : styles.textColor)};
  background: ${props => (props.isClicked ? styles.primaryColor : "#ffffff")};
  outline: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  &:hover {
    background: ${props =>
      props.isClicked ? styles.primaryColor : styles.buttonHoverColor};
  }
`;
const BackgroundShadow = styled.div`
  position: fixed;
  top: 4.1rem;
  display: ${props => (props.isModalOn ? "block" : "none")}
  width: 500rem;
  height: 500rem;
  background: rgba(255, 255, 255, 0.85);
`;

const Nav = () => {
  const [visibilityForDate, setVisibilityForDate] = useState(false);
  const [visibilityForPersonnel, setVisibilityForPersonnel] = useState(false);
  const [visibilityForCost, setVisibilityForCost] = useState(false);

  const setAllToFalse = () => {
    if (visibilityForDate) setVisibilityForDate(false);
    if (visibilityForPersonnel) setVisibilityForPersonnel(false);
    if (visibilityForCost) setVisibilityForCost(false);
  };
  const checkModalOn = () => {
    return visibilityForDate || visibilityForPersonnel || visibilityForCost;
  };

  return (
    <NavWrapper>
      <ButtonContainer>
        <BackgroundShadow isModalOn={checkModalOn()} onClick={setAllToFalse} />
        <ButtonWrapper>
          <Button
            isClicked={visibilityForDate}
            alt="date"
            onClick={() => {
              setAllToFalse();
              setVisibilityForDate(!visibilityForDate);
            }}
          >
            날짜
          </Button>
          {visibilityForDate && <DatePicker />}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            isClicked={visibilityForPersonnel}
            alt="personnel"
            onClick={() => {
              setAllToFalse();
              setVisibilityForPersonnel(!visibilityForPersonnel);
            }}
          >
            인원
          </Button>
          {visibilityForPersonnel && <PersonnelPicker />}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            isClicked={visibilityForCost}
            alt="cost"
            onClick={() => {
              setAllToFalse();
              setVisibilityForCost(!visibilityForCost);
            }}
          >
            가격
          </Button>
          {visibilityForCost && <CostPicker />}
        </ButtonWrapper>
      </ButtonContainer>
    </NavWrapper>
  );
};

export default Nav;
