import React from "react";
import styled from "styled-components";
import styles from "../styles";

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 57.5rem;
  height: 34rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
`;

const DatePicker = () => {
  return <DatePickerWrapper></DatePickerWrapper>;
};

export default DatePicker;
