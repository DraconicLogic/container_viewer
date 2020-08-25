import React from "react";
import styled from "styled-components";
import productsInOrder from "../productsInOrder.json";

const Table = styled.table``;

const ContentTally = ({ content }) => {
  const contentObject = content.reduce((obj, stack) => {
    stack.stackContent.forEach((bale) => {
      if (!obj[bale]) obj[bale] = 1;
      else obj[bale] += 1;
    });
    return obj;
  }, {});

  const orderedContainer = productsInOrder.reduce((ordered, product) => {
    if (contentObject[product]) {
      ordered.push({ [product]: contentObject[product] });
    }
    return ordered;
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {orderedContainer.map((entry, index) => (
          <tr key={index}>
            <td>{Object.keys(entry)[0]}</td>
            <td>{Object.values(entry)[0]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContentTally;
