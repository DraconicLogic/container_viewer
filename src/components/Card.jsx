import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  border: solid;
  width: 15em;
  height: 7em;
  border-radius: 2em;
  margin-bottom: 2em;
  cursor: pointer;
`;

const NavbarCard = styled(CardBody)`
  display: inline-block;
  width: 10em;
  height: auto;
  border-radius: 1em;
  cursor: auto;
`;

const Card = ({ container, select, context }) => {
  const { containerNumber, sealNumber, date } = container;

  const displayContainerListCard = () => (
    <CardBody onClick={() => select(container)}>
      <p>{containerNumber}</p>
      <p>{sealNumber}</p>
      <p>{date}</p>
    </CardBody>
  );

  const displayNavbarCard = () => (
    <NavbarCard>
      <span>{containerNumber}</span>
      <br />
      <span>{sealNumber}</span>
      <br />
      <span>{date}</span>
    </NavbarCard>
  );

  return context === "Navbar"
    ? displayNavbarCard()
    : displayContainerListCard();
};

export default Card;
