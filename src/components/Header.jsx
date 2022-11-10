import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Navbar = styled.div`
  border: solid;
  display: grid;
  grid-template-columns 30% 40% 30%;
`;
const Title = styled.h1`
	grid-column: 2;
	display: inline-block;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const LeftSection = styled.span`
	grid-column: 1;
	font-size: xxx-large;
	margin-right: 70%;
	cursor: pointer;
`;

const RightSection = styled.span`
	grid-column: 3;
`;

const Header = ({ selected, unselect }) => {
	const togggleDisplay = () => {
		let display;

		if (selected) {
			display = (
				<Navbar>
					<LeftSection onClick={() => unselect(null)} size="100%">
						&#8249;
					</LeftSection>
					<Title>Container Viewer</Title>
					<RightSection>
						<Card container={selected} select={() => null} context="Navbar" />
					</RightSection>
				</Navbar>
			);
		} else {
			display = (
				<Navbar>
					<Title>Container Viewer</Title>
					<RightSection>
						{/* <span aria-label="search" role="img">
              &#x1F50D;
            </span> */}
					</RightSection>
				</Navbar>
			);
		}

		return display;
	};

	return togggleDisplay();
};

export default Header;
