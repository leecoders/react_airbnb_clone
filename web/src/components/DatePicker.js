import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../styles";
import arrowImage from "../assets/images/arrow.png";

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 57.5rem;
  height: 38rem;
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
  background: #ffffff url(${arrowImage}) no-repeat 50% 50%;
  background-size: 2rem 2.5rem;
  cursor: pointer;
  &:hover {
    border: 1px solid #adb5bd;
  }
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
const BoundaryArea = styled.div`
  position: relative;
  top: 3rem;
  width: 55rem;
  height: 30rem;
  margin: 0 auto;
  border: 1px solid red;
`;
const WeekDayContainer = styled.div`
  z-index: 4;
  position: relative;
  top: 4rem;
  margin: 0 auto;
  width: 50rem;
  height: 3rem;
  border: 1px solid orange;
  font-size: 1.1rem;
`;
const CalendarContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  ${props => (props.pos === "left" ? "left: 1.5rem;" : "right:1.5rem;")}
  width: 25rem;
  height: 28rem;
  border: 1px solid black;
`;
const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(-26.5rem);
  width: 108rem;
  height: 30rem;
  border: 1px solid blue;
  ${props => (props.isClicked && props.dir === "left" ? "left: -21rem;" : "")}
`;
const CarouselCard = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.5rem 1rem;
  width: 25rem;
  height: 28rem;
  background: red;
  font-size: 10rem;
`;

const DatePicker = () => {
  return (
    <DatePickerWrapper>
      <SlideButton
        dir={"left"}
        onClick={() => {
          const carousel = document.querySelector(".carousel");
          const card = carousel.children[0];
          carousel.style.transition = "0.2s";
          carousel.style.width = "135rem";
          carousel.style.transform = "translateX(-53rem)";
          carousel.appendChild(card.cloneNode(true));
          card.remove();
          carousel.style.width = "108rem";
          carousel.style.transition = "none";
          carousel.style.transform = "translateX(-26.5rem)";
        }}
      />
      <SlideButton
        dir={"right"}
        onClick={() => {
          const carousel = document.querySelector(".carousel");
          const card = carousel.children[3];
          carousel.style.width = "0rem";
          carousel.insertBefore(card.cloneNode(true), card);
          carousel.style.transform = "translateX(-53rem)";
          card.remove();
        }}
      />
      <BoundaryArea>
        <WeekDayContainer></WeekDayContainer>
        <CalendarContainer pos={"left"}></CalendarContainer>
        <CalendarContainer pos={"right"}></CalendarContainer>
        <CarouselContainer className="carousel">
          <CarouselCard>1</CarouselCard>
          <CarouselCard>2</CarouselCard>
          <CarouselCard>3</CarouselCard>
          <CarouselCard>4</CarouselCard>
        </CarouselContainer>
      </BoundaryArea>
      <Button type={"delete"}>삭제</Button>
      <Button type={"save"}>저장</Button>
    </DatePickerWrapper>
  );
};

export default DatePicker;
