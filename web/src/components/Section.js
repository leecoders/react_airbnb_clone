import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchGetRooms } from "../utils/fetch.js";

const SectionWrapper = styled.div`
  position: relative;
  top: 11.4rem;
  height: 505rem;
  background: #ffffff;
`;

const Section = ({ dateInfo, personnelInfo, costInfo }) => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    console.log(rooms);
    (async () => {
      const result = await fetchGetRooms();
      if (result.message === "success") {
        if (JSON.stringify(rooms) !== JSON.stringify(result.data)) {
          setRooms(result.data);
        }
      }
    })();
  }, [rooms]);

  return <SectionWrapper></SectionWrapper>;
};

export default Section;
