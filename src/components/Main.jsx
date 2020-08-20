import React, { useState, useEffect } from "react";
import ContainerList from "../screens/ContainerList";
import { getContainers } from "../api";

const Main = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    getContainers().then(({ containers }) => {
      setContainers(containers);
    });
  }, []);

  return (
    <div>
      <h1>Main</h1>
      <ContainerList containers={containers} />
    </div>
  );
};

export default Main;
