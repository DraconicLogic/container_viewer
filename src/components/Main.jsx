import React, { useState, useEffect } from "react";
import Header from "./Header";
import ContainerList from "../screens/ContainerList";
import ContainerViewer from "./ContainerViewer";
import { getContainers } from "../api";

const Main = () => {
  const [containers, setContainers] = useState([]);
  const [selectedContainer, setSelectedContainer] = useState(null);

  useEffect(() => {
    getContainers().then(({ containers }) => {
      setContainers(containers);
    });
  }, []);

  return (
    <div>
      <h1>Main</h1>
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
