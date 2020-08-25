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
      <tr>
        <th>Product</th>
        <th>Quantity</th>
      </tr>
      {orderedContainer.map((entry, index) => (
        <tr>
          <td>{Object.keys(entry)[0]}</td>
          <td>{Object.values(entry)[0]}</td>
        </tr>
      ))}
    </Table>
  );
};

export default ContentTally;
