import React from "react";
import Card from "../components/Card";

const ContainerList = ({ containers }) => {
  console.log(containers);

  return (
    <div>
      <h1>Container List</h1>
      {containers.map((container) => (
        <Card container={container} />
      ))}
    </div>
  );
};

export default ContainerList;
