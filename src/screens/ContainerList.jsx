import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const List = styled.div`
  margin-top: 2em;
  text-align: -webkit-center;
`;

const ContainerList = ({ containers, select }) => {
  return (
    <List>
      {containers.map((container) => (
        <Card
          container={container}
          key={container.containerNumber}
          select={select}
          context="ContainerList"
        />
      ))}
    </List>
  );
};

export default ContainerList;
