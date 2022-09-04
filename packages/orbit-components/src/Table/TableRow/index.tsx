import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/Table/TableRow/index.tsx
import * as Common from "../../common/types";
=======
import { TableRow as TableRowType } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableRow/index.jsx

export const StyledTableRow = styled(({ children, className, dataTest }) => (
  <tr className={className} data-test={dataTest}>
    {children}
  </tr>
))`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

<<<<<<< HEAD:packages/orbit-components/src/Table/TableRow/index.tsx
const TableRow: React.FC<React.PropsWithChildren<Common.Globals>> = ({ dataTest, children }) => (
=======
const TableRow: typeof TableRowType = ({ dataTest, children }) => (
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableRow/index.jsx
  <StyledTableRow dataTest={dataTest}>{children}</StyledTableRow>
);

export default TableRow;
