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
  gridColumn: "1",
  cursor: "pointer",
  borderRight: "solid",
};

const rightOptionStyle = {
  gridColumn: "2",
  cursor: "pointer",
};

const leftHighlightStyle = {
  gridColumn: "1",
  cursor: "pointer",
  borderRight: "solid",
  background: "teal",
};

const rightHighlightStyle = {
  background: "teal",
  gridColumn: "2",
  cursor: "pointer",
};

const ContainerViewer = ({ container }) => {
  const [rawScreen, setRawScreen] = useState(true);
  return (
    <div>
      <NavExt>
        <span
          onClick={() => setRawScreen(true)}
          style={(rawScreen && leftHighlightStyle) || leftOptionStyle}
        >
          Raw Content
        </span>
        <span
          onClick={() => setRawScreen(false)}
          style={(!rawScreen && rightHighlightStyle) || rightOptionStyle}
        >
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
