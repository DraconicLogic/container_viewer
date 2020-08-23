import React from "react";
import RawContent from "../screens/RawContent";
// import ContentTally from "../screens/ContentTally";

const ContainerViewer = ({ container }) => {
  console.log(container);
  return (
    <div>
      <RawContent content={container.containerContent} />
      {/* <ContentTally /> */}
    </div>
  );
};

export default ContainerViewer;
