import React from "react";
import styled from "styled-components";
import styles from "../styles";
import logoImage from "../assets/images/logo.png";

const DatePicker = () => {
  return (
    <HeaderWrapper>
      <Title>
        <Logo />
        에어비앤비
      </Title>
      <UserContainer>camper 님</UserContainer>
    </HeaderWrapper>
  );
};

export default DatePicker;
