import React, { useEffect } from "react";
import styled from "styled-components";

let columns = 1;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(36, auto);
  grid-template-columns: repeat(${columns}, max-content);
  grid-auto-flow: column;
  height: 100%;
  width: 100%;
`;

const RawContent = ({ content }) => {
  const flattenContent = (unflattened) => {
    const flattenedArray = unflattened.reduce((newArray, stack) => {
      stack.stackContent.forEach((item) => {
        newArray.push(item);
      });
      return newArray;
    }, []);

    return flattenedArray;
  };

  useEffect(() => {
    columns = Math.ceil(flattenContent(content).length / 36);
  }, [content]);

  const itemStyle = {
    border: "solid",
    borderWidth: "thin",
  };
  return (
    <Grid>
      {flattenContent(content).map((item, index) => (
        <span style={itemStyle} key={index}>
          {item}
        </span>
      ))}
    </Grid>
  );
};

export default RawContent;
