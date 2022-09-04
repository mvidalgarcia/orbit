import * as React from "react";
import styled from "styled-components";

import * as Common from "../../common/types";
import defaultTheme from "../../defaultTheme";
import { StyledTableCell } from "../TableCell";
<<<<<<< HEAD:packages/orbit-components/src/Table/TableHead/index.tsx
=======
import { TableHead as TableHeadType } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableHead/index.jsx

const StyledTableHead = styled(({ children, className, dataTest }) => (
  <thead className={className} data-test={dataTest}>
    {children}
  </thead>
))`
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTableHead};
  width: 100%;
  white-space: nowrap;
  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightTableHead};
  }
`;

StyledTableHead.defaultProps = {
  theme: defaultTheme,
};

<<<<<<< HEAD:packages/orbit-components/src/Table/TableHead/index.tsx
const TableHead: React.FC<React.PropsWithChildren<Common.Globals>> = ({ children, dataTest }) => (
=======
const TableHead: typeof TableHeadType = ({ children, dataTest }) => (
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableHead/index.jsx
  <StyledTableHead dataTest={dataTest}>{children}</StyledTableHead>
);

export default TableHead;
