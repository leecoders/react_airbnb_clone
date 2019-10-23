import React from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Section from "./Section.js";
import styled from "styled-components";
import styles from "../styles";

const AppWrapper = styled.div`
  ${styles.handWrittenFontFace};
`;
const HeaderContainer = styled.div`
  z-index: 99;
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const App = () => {
  let closeNavModal;
  const liftUpNavModalControl = setAllToFalse => {
    closeNavModal = setAllToFalse;
  };
  const handleHeaderMenuClick = () => {
    closeNavModal();
  };
  return (
    <AppWrapper>
      <HeaderContainer>
        <Header handleHeaderMenuClick={handleHeaderMenuClick} />
        <Nav liftUpNavModalControl={liftUpNavModalControl} />
      </HeaderContainer>
      <Section />
    </AppWrapper>
  );
};

export default App;
