import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Section from "./Section.js";
import styled from "styled-components";
import styles from "../styles";
import util from "../utils";

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
  const [dateInfo, setDateInfo] = useState({});
  const [personnelInfo, setPersonnelInfo] = useState({});
  const [costInfo, setCostInfo] = useState({});

  let closeNavModal;

  useEffect(() => {
    console.log(dateInfo, personnelInfo, costInfo);
  }, [dateInfo, personnelInfo, costInfo]);

  const liftUpFilterInfo = (
    dateInfoPassed,
    personnelInfoPassed,
    costInfoPassed
  ) => {
    setDateInfo(util.parseDateInfo(dateInfoPassed));
    setPersonnelInfo(util.parsePersonnelInfo(personnelInfoPassed));
    setCostInfo(util.parsePersonnelInfo(costInfoPassed));
  };
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
        <Nav
          liftUpFilterInfo={liftUpFilterInfo}
          liftUpNavModalControl={liftUpNavModalControl}
        />
      </HeaderContainer>
      <Section />
    </AppWrapper>
  );
};

export default App;
