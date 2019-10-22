import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../styles";
import arrowImage from "../assets/images/arrow.png";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
moment.locale("ko");

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 65rem;
  height: 36rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  color: ${styles.textColor};
  font-size: 2rem;
  font-family: ${styles.normalFont};
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
  font-family: ${styles.handWrittenFont};
  &:hover {
    text-decoration: underline;
  }
`;

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState("startDate");

  return (
    <DatePickerWrapper>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => {
          setFocusedInput(focusedInput);
        }}
        hideKeyboardShortcutsPanel={true}
        keepOpenOnDateSelect={true}
        numberOfMonths={2}
        noBorder={true}
        monthFormat={"YYYY MMMM"}
        isOutsideRange={day => day.isBefore(moment())}
      />
      <Button
        type={"delete"}
        onClick={() => {
          setStartDate(null);
          setEndDate(null);
        }}
      >
        삭제
      </Button>
      <Button type={"save"}>저장</Button>
    </DatePickerWrapper>
  );
};

export default DatePicker;
