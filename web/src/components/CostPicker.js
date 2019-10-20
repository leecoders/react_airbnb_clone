import React, { useState } from "react";
import styled from "styled-components";
import styles from "../styles";

const CostPickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 45rem;
  height: 34rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  font-size: 1.4rem;
`;
const RangeSliderContainer = styled.div`
  position: relative;
  top: 5rem;
  margin: 0 auto;
  width: 35rem;
  height: 3.2rem;
`;
const RangeSliderBar = styled.div`
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: 32rem;
  height: 0.4rem;
  background: ${styles.borderColor};
  border-radius: 0.4rem;
`;
const RangeSliderBarBetweenButtons = styled.div`
  position: relative;
  left: ${props => props.rangeBarLeft + "px"};
  width: ${props => props.rangeBarWidth + "px"};
  height: 0.4rem;
  background: ${styles.primaryColor};
  border-radius: 0.4rem;
`;
const RangeButton = styled.button`
  position: absolute;
  left: ${props => props.left + "px"}
  top: 0;
  width: 3rem;
  height: 3rem;
  background: #ffffff;
  border: 0.1rem solid ${styles.primaryColor};
  color: ${styles.primaryColor};
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  user-select: none;
`;

const CostPicker = () => {
  const [leftPos, setLeftPos] = useState(0);
  const [rightPos, setRightPos] = useState(320);
  const [leftMouseStart, setLeftMouseStart] = useState(undefined);
  const [rightMouseStart, setRightMouseStart] = useState(undefined);
  const [leftButtonStart, setLeftButtonStart] = useState(0);
  const [rightButtonStart, setRightButtonStart] = useState(0);

  const handleMouseDownForLeft = e => {
    setLeftButtonStart(leftPos);
    setLeftMouseStart(e.clientX);
  };
  const handleMouseDownForRight = e => {
    setRightButtonStart(rightPos);
    setRightMouseStart(e.clientX);
  };
  const handleMouseMove = e => {
    if (leftMouseStart) {
      const dist = e.clientX - leftMouseStart;
      let nextLeft = leftButtonStart + dist;
      if (nextLeft + 10 > rightPos) return;
      if (nextLeft < 0) nextLeft = 0;
      if (nextLeft > 320) nextLeft = 320;
      setLeftPos(nextLeft);
    }
    if (rightMouseStart) {
      const dist = e.clientX - rightMouseStart;
      let nextLeft = rightButtonStart + dist;
      if (nextLeft - 10 < leftPos) return;
      if (nextLeft < 0) nextLeft = 0;
      if (nextLeft > 320) nextLeft = 320;
      setRightPos(nextLeft);
    }
  };
  const handleMouseUp = () => {
    setLeftMouseStart(undefined);
    setRightMouseStart(undefined);
  };

  return (
    <CostPickerWrapper onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <RangeSliderContainer>
        <RangeSliderBar>
          <RangeSliderBarBetweenButtons
            rangeBarLeft={leftPos}
            rangeBarWidth={rightPos - leftPos}
          />
        </RangeSliderBar>
        <RangeButton onMouseDown={handleMouseDownForLeft} left={leftPos}>
          |||
        </RangeButton>
        <RangeButton onMouseDown={handleMouseDownForRight} left={rightPos}>
          |||
        </RangeButton>
      </RangeSliderContainer>
    </CostPickerWrapper>
  );
};

export default CostPicker;
