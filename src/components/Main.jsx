import React, { useState, useEffect } from "react";
import Header from "./Header";
import ContainerList from "../screens/ContainerList";
import ContainerViewer from "./ContainerViewer";
import * as api from "../api";
import styled from "styled-components";
import * as utils from "../utils";
import { updateLocalContainers, getContainersLocal } from "../dataStorage";

const Modal = styled.div`
	position: fixed;
	text-align: center;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.9);
`;

const Main = () => {
	const [containers, setContainers] = useState([]);
	const [selectedContainer, setSelectedContainer] = useState(null);

	useEffect(() => {
		const localContainers = getContainersLocal();
		if (localContainers) {
			localContainers.sort(utils.compareDates);
			setContainers(localContainers);
		}
		api.getContainers().then(({ containers }) => {
			containers.sort(utils.compareDates);
			if (!localContainers) {
				updateLocalContainers(containers);
				setContainers(containers);
			} else if (localContainers.length < containers.length) {
				updateLocalContainers(containers);
				setContainers(containers);
			}
			// indicate that data is synced
		});
	}, []);

	return (
		<div>
			{containers.length < 1 && (
				<Modal>
					<h1 style={{ color: "white" }}>Loading</h1>
				</Modal>
			)}
			<Header selected={selectedContainer} unselect={setSelectedContainer} />
			{selectedContainer ? (
				<ContainerViewer container={selectedContainer} />
			) : (
				<ContainerList containers={containers} select={setSelectedContainer} />
			)}
		</div>
	);
};

export default Main;
