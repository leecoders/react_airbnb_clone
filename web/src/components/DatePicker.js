import React from "react";
import styled from "styled-components";
import styles from "../styles";

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 5rem;
  left: 0rem;
  width: 57.5rem;
  height: 34rem;
  border: 1px solid black;
  background: #ffffff;
`;

const DatePicker = () => {
  return <DatePickerWrapper></DatePickerWrapper>;
};

export default DatePicker;
