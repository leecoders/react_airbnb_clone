import React from "react";
import styled from "styled-components";
import styles from "../styles";

const PersonnelPickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 45rem;
  height: 31rem;
  padding-top: 1rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  font-size: 2rem;
  font-family: ${styles.handWrittenFont};
`;
const TypeOfPersonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
`;
const TypeOfPersonWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: 15rem;
  height: 100%;
  text-align: center;
`;
const TypeOfPerson = styled.div`
  position: relative;
  margin-top: ${props => (props.isAdult ? "2.5rem" : "1.5rem")}
  font-size: 3rem;
`;
const RangeOfAge = styled.div`
  position: relative;
  font-size: 2.2rem;
`;
const PlusMinusWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3rem;
  display: inline-block;
  width: auto;
  height: 5rem;
`;
const PlusMinusButton = styled.span`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: 0.2rem solid ${styles.primaryColor};
  border-radius: 50%;
  text-align: center;
  line-height: 3.2rem;
  font-size: 3rem;
  color: ${styles.primaryColor};
  font-family: ${styles.symbolFont};
  cursor: pointer;
`;
const Counter = styled.span`
  position: relative;
  display: inline-block;
  width: 8rem;
  top: 0.1rem;
  height: 4.9rem;
  font-size: 3rem;
  line-height: 4.9rem;
  text-align: center;
`;
const Button = styled.div`
  z-index: 5;
  position: absolute;
  ${props =>
    props.type === "delete"
      ? "left: 2rem;"
      : "right: 2rem; color: " + styles.primaryColor + ";"}
  bottom: 2.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PersonnelPicker = () => {
  return (
    <PersonnelPickerWrapper>
      <TypeOfPersonContainer>
        <TypeOfPersonWrapper>
          <TypeOfPerson isAdult={true}>성인</TypeOfPerson>
        </TypeOfPersonWrapper>
        <PlusMinusWrapper>
          <PlusMinusButton>-</PlusMinusButton>
          <Counter>0+</Counter>
          <PlusMinusButton>+</PlusMinusButton>
        </PlusMinusWrapper>
      </TypeOfPersonContainer>
      <TypeOfPersonContainer>
        <TypeOfPersonWrapper>
          <TypeOfPerson isAdult={false}>어린이</TypeOfPerson>
          <RangeOfAge>2~12세</RangeOfAge>
        </TypeOfPersonWrapper>
        <PlusMinusWrapper>
          <PlusMinusButton>-</PlusMinusButton>
          <Counter>0+</Counter>
          <PlusMinusButton>+</PlusMinusButton>
        </PlusMinusWrapper>
      </TypeOfPersonContainer>
      <TypeOfPersonContainer>
        <TypeOfPersonWrapper>
          <TypeOfPerson isAdult={false}>유아</TypeOfPerson>
          <RangeOfAge>2세 미만</RangeOfAge>
        </TypeOfPersonWrapper>
        <PlusMinusWrapper>
          <PlusMinusButton>-</PlusMinusButton>
          <Counter>0+</Counter>
          <PlusMinusButton>+</PlusMinusButton>
        </PlusMinusWrapper>
      </TypeOfPersonContainer>
      <Button type={"delete"}>삭제</Button>
      <Button type={"save"}>저장</Button>
    </PersonnelPickerWrapper>
  );
};

export default PersonnelPicker;
