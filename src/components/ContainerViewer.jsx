import React, { useState } from "react";
import RawContent from "../screens/RawContent";
import ContentTally from "../screens/ContentTally";
import styled from "styled-components";

const NavExt = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr;
  border: solid;
  border-top: none;
`;

const leftOptionStyle = {
  "grid-column": "1",
  cursor: "pointer",
  "border-right": "solid",
};

const rightOptionStyle = {
  "grid-column": "2",
  cursor: "pointer",
};

const ContainerViewer = ({ container }) => {
  console.log(container);
  const [rawScreen, setRawScreen] = useState(true);
  return (
    <div>
      <NavExt>
        <span onClick={() => setRawScreen(true)} style={leftOptionStyle}>
          Raw Content
        </span>
        <span onClick={() => setRawScreen(false)} style={rightOptionStyle}>
          Content Tally
        </span>
      </NavExt>
      {rawScreen ? (
        <RawContent content={container.containerContent} />
      ) : (
        <ContentTally content={container.containerContent} />
      )}
    </div>
  );
};

export default ContainerViewer;
