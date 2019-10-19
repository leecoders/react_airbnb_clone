import React from "react";
import styled from "styled-components";
import styles from "../styles";

const CostPickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 57.5rem;
  height: 34rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  font-size: 1.4rem;
`;

const CostPicker = () => {
  return <CostPickerWrapper></CostPickerWrapper>;
};

export default CostPicker;
