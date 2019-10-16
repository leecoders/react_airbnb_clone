import React from "react";
import styled from "styled-components";
import styles from "../styles";
import arrowImage from "../assets/images/arrow.png";

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 57.5rem;
  height: 34rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  color: ${styles.textColor};
  font-size: 1.4rem;
`;
const SlideButton = styled.div`
  z-index: 5;
  position: absolute;
  top: 3.5rem;
  ${props =>
    props.dir === "left"
      ? "left: 3.2rem; transform: rotate(180deg);"
      : "right: 3.2rem"}
  width: 3.7rem;
  height: 3.1rem;
  border: 1px solid ${styles.borderColor};
  border-radius: 0.3rem;
  background: url(${arrowImage}) no-repeat 50% 50%;
  background-size: 2rem 2.5rem;
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

const DatePicker = () => {
  return (
    <DatePickerWrapper>
      <SlideButton dir={"left"} />
      <SlideButton dir={"right"} />
      <Button type={"delete"}>삭제</Button>
      <Button type={"save"}>저장</Button>
    </DatePickerWrapper>
  );
};

export default DatePicker;
