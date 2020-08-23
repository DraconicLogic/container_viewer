import React from "react";
import Card from "../components/Card";

const ContainerList = ({ containers, select }) => {
  console.log(containers);

  return (
    <div>
      <h1>Container List</h1>
      {containers.map((container) => (
        <Card
          container={container}
          key={container.containerNumber}
          select={select}
          context="ContainerList"
        />
      ))}
    </div>
  );
};

export default ContainerList;
