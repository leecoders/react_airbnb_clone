import React from "react";
import styled from "styled-components";
import styles from "../styles";

const SignupTabWrapper = styled.div`
  z-index: 102;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 34rem;
  border-radius: 0.8rem;
  background: #ffffff;
`;

const SignupTab = () => {
  return <SignupTabWrapper></SignupTabWrapper>;
};

export default SignupTab;
