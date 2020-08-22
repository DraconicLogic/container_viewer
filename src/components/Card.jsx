import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  border: solid;
  width: 15em;
  height: 7em;
  border-radius: 2em;
  margin-bottom: 2em;
`;

const Card = ({ container, select }) => {
  const { containerNumber, sealNumber, date } = container;
  return (
    <CardBody onClick={() => select(container)}>
      <p>{containerNumber}</p>
      <p>{sealNumber}</p>
      <p>{date}</p>
    </CardBody>
  );
};

export default Card;
