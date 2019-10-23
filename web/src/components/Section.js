import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchGetRooms } from "../utils/fetch.js";
import Room from "./Room.js";

const SectionWrapper = styled.div`
  position: relative;
  top: 11.4rem;
  height: 505rem;
  background: #ffffff;
  font-family: "KimNamyun", sans-serif;
  font-size: 2rem;
`;
const RoomsCounterContainer = styled.div`
  position: relative;
  padding-top: 3rem;
  padding-left: 2rem;
  width: 30rem;
  font-size: 3.5rem;
  font-weight: bold;
`;
const RoomsWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 100%;
`;
const RoomContainer = styled.div`
  position: relative;
  top: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid black;
`;

const Section = ({ dateInfo, personnelInfo, costInfo }) => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetchGetRooms();
      if (result.message === "success") {
        if (JSON.stringify(rooms) !== JSON.stringify(result.data.rooms)) {
          setRooms(result.data.rooms);
        }
      }
    })();
  }, [rooms]);

  return (
    <SectionWrapper>
      {!rooms ? (
        <div>로딩중</div>
      ) : (
        <RoomsCounterContainer>
          숙소 {rooms ? rooms.length : 0}개
        </RoomsCounterContainer>
      )}
      <RoomsWrapper>
        {rooms &&
          rooms.map((room, idx) => {
            return (
              <RoomContainer>
                <Room room={room} key={idx} />
              </RoomContainer>
            );
          })}
      </RoomsWrapper>
    </SectionWrapper>
  );
};

export default Section;
