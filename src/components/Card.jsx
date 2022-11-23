import React from "react";
import styled from "styled-components";
import * as utils from "../utils";

const CardBody = styled.div`
	border: solid;
	width: 15em;
	height: fit-content;
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
	const { containerNumber, sealNumber, date, containerContent } = container;

	const displayContainerListCard = () => (
		<CardBody onClick={() => select(container)}>
			<p>{containerNumber}</p>
			<p>{sealNumber}</p>
			<p>{utils.simplifyDate(date)}</p>
			<p>{utils.countBales(containerContent)} bales</p>
			<p>{utils.weighBales(containerContent)} kg</p>
		</CardBody>
	);

	const displayNavbarCard = () => (
		<NavbarCard>
			<span>{containerNumber}</span>
			<br />
			<span>{sealNumber}</span>
			<br />
			<span>{utils.simplifyDate(date)}</span>
		</NavbarCard>
	);

	return context === "Navbar"
		? displayNavbarCard()
		: displayContainerListCard();
};

export default Card;
