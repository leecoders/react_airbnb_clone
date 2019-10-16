import React from "react";
import styled from "styled-components";
import styles from "../styles";

const PersonnelPickerWrapper = styled.div`
  position: absolute;
  top: 5rem;
  width: 57.5rem;
  height: 34rem;
  border: 1px solid yellow;
  background: #ffffff;
`;

const PersonnelPicker = () => {
  return <PersonnelPickerWrapper></PersonnelPickerWrapper>;
};

export default PersonnelPicker;
