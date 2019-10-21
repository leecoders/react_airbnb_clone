import React, { useState } from "react";
import styled from "styled-components";
import styles from "../styles";

const CostPickerWrapper = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 45rem;
  height: 22rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 0.8rem;
  font-size: 2rem;
  font-family: ${styles.normalFont};
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
const CostInputContainer = styled.div`
  position: relative;
  top: 7rem;
  margin: 0 auto;
  width: 32rem;
`;
const CostInputWrapper = styled.div`
  position: absolute;
  display: inline-block;
  ${props => (props.isLeft ? "left: 0" : "right: 0")}
  width: 14.2rem;
  height: 4rem;
  border: 1px solid
    ${props => (props.visibleFocus ? styles.primaryColor : styles.borderColor)};
  border-radius: 0.4rem;
`;
const BeforeCostInput = styled.div`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  font-family: ${styles.normalFont};
  font-weight: bold;
`;
const CostInput = styled.input`
  position: relative;
  display: inline-block;
  width: 10rem;
  height: 4rem;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  font-size: 1.6rem;
`;
const BetweenCostInput = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 4.2rem;
  line-height: 4.2rem;
  font-family: ${styles.symbolFont};
`;
const Button = styled.div`
  z-index: 5;
  position: absolute;
  ${props =>
    props.type === "delete"
      ? "left: 2rem;"
      : "right: 2rem; color: " + styles.primaryColor + ";"}
  bottom: 2.5rem;
  cursor: pointer;
  font-family: ${styles.handWrittenFont};
  &:hover {
    text-decoration: underline;
  }
`;

const CostPicker = () => {
  const [leftPos, setLeftPos] = useState(0);
  const [rightPos, setRightPos] = useState(320);
  const [leftMouseStart, setLeftMouseStart] = useState(undefined);
  const [rightMouseStart, setRightMouseStart] = useState(undefined);
  const [leftButtonStart, setLeftButtonStart] = useState(0);
  const [rightButtonStart, setRightButtonStart] = useState(0);
  const [focusLeftInput, setFocusLeftInput] = useState(false);
  const [focusRightInput, setFocusRightInput] = useState(false);

  const handleMouseDownForLeft = e => {
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
    setLeftButtonStart(leftPos);
    setLeftMouseStart(e.clientX);
  };
  const handleMouseDownForRight = e => {
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
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
    <CostPickerWrapper
      onClick={() => {
        setFocusRightInput(false);
        setFocusLeftInput(false);
      }}
    >
      <RangeSliderContainer>
        <RangeSliderBar>
          <RangeSliderBarBetweenButtons
            rangeBarLeft={leftPos}
            rangeBarWidth={rightPos - leftPos}
          />
        </RangeSliderBar>
        <RangeButton
          draggable="true"
          onDragStart={handleMouseDownForLeft}
          onDrag={handleMouseMove}
          onDragEnd={handleMouseUp}
          left={leftPos}
        >
          |||
        </RangeButton>
        <RangeButton
          draggable="true"
          onDragStart={handleMouseDownForRight}
          onDrag={handleMouseMove}
          onDragEnd={handleMouseUp}
          left={rightPos}
        >
          |||
        </RangeButton>
      </RangeSliderContainer>
      <CostInputContainer>
        <CostInputWrapper
          onClick={e => {
            setFocusRightInput(false);
            setFocusLeftInput(true);
            e.stopPropagation();
          }}
          isLeft={true}
          visibleFocus={focusLeftInput}
        >
          <BeforeCostInput>₩</BeforeCostInput>
          <CostInput
            type="number"
            onChange={() => {
              console.log(123);
            }}
          ></CostInput>
        </CostInputWrapper>
        <BetweenCostInput>-</BetweenCostInput>
        <CostInputWrapper
          onClick={e => {
            setFocusLeftInput(false);
            setFocusRightInput(true);
            e.stopPropagation();
          }}
          isLeft={false}
          visibleFocus={focusRightInput}
        >
          <BeforeCostInput>₩</BeforeCostInput>
          <CostInput type="number"></CostInput>
        </CostInputWrapper>
      </CostInputContainer>
      <Button type={"delete"}>삭제</Button>
      <Button type={"save"}>저장</Button>
    </CostPickerWrapper>
  );
};

export default CostPicker;
