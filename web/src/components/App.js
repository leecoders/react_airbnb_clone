import React from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Section from "./Section.js";
import styled from "styled-components";

const AppWrapper = styled.div``;

const HeaderContainer = styled.div`
  z-index: 99;
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const App = () => {
  return (
    <AppWrapper>
      <HeaderContainer>
        <Header />
        <Nav />
      </HeaderContainer>
      <Section />
    </AppWrapper>
  );
};

export default App;
