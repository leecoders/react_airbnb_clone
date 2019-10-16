import React from "react";
import styled from "styled-components";
import styles from "../styles";

const CostPickerWrapper = styled.div`
  position: absolute;
  top: 5rem;
  width: 57.5rem;
  height: 34rem;
  border: 1px solid red;
  background: #ffffff;
`;

const CostPicker = () => {
  return <CostPickerWrapper></CostPickerWrapper>;
};

export default CostPicker;
