import React from "react";
import styled from "styled-components";

const Grid = styled.table`
    width; 100%
 `;
const table = {
  rows: Array(36).fill(1),
  columns: Array(7).fill(1),
};

const RawContent = ({ content }) => {
  console.log(content);
  return (
    <Grid>
      {table.rows.map(() => (
        <tr>
          {table.columns.map(() => (
            <td>t&nbsp</td>
          ))}
        </tr>
      ))}
    </Grid>
  );
};

export default RawContent;
