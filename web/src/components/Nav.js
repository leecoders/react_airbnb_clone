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
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
const ButtonWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 1rem;
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

const Nav = () => {
  const [visibleForDate, setVisibleForDate] = useState(false);
  const [visibleForPersonnel, setVisibleForPersonnel] = useState(false);
  const [visibleForCost, setVisibleForCost] = useState(false);

  const setAllToFalse = () => {
    if (visibleForDate) setVisibleForDate(false);
    if (visibleForPersonnel) setVisibleForPersonnel(false);
    if (visibleForCost) setVisibleForCost(false);
  };

  return (
    <NavWrapper>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            isClicked={visibleForDate}
            alt="date"
            onClick={() => {
              setAllToFalse();
              setVisibleForDate(!visibleForDate);
            }}
          >
            날짜
          </Button>
          {visibleForDate && <DatePicker />}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            isClicked={visibleForPersonnel}
            alt="personnel"
            onClick={() => {
              setAllToFalse();
              setVisibleForPersonnel(!visibleForPersonnel);
            }}
          >
            인원
          </Button>
          {visibleForPersonnel && <PersonnelPicker />}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            isClicked={visibleForCost}
            alt="cost"
            onClick={() => {
              setAllToFalse();
              setVisibleForCost(!visibleForCost);
            }}
          >
            가격
          </Button>
          {visibleForCost && <CostPicker />}
        </ButtonWrapper>
      </ButtonContainer>
    </NavWrapper>
  );
};

export default Nav;
