import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RoomWrapper = styled.div`
  position: relative;
  height: 10rem;
`;
const Room = ({ room }) => {
  console.log(room);
  return <RoomWrapper></RoomWrapper>;
};

export default Room;
