import * as React from "react";
import styled from "styled-components";

import * as Common from "../../common/types";
import defaultTheme from "../../defaultTheme";
import TableBodyComponent from "./index.d";

export const StyledTableBody = styled(({ children, className, dataTest }) => (
  <tbody className={className} data-test={dataTest}>
    {children}
  </tbody>
))`
  width: 100%;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
`;

StyledTableBody.defaultProps = {
  theme: defaultTheme,
};

<<<<<<< HEAD:packages/orbit-components/src/Table/TableBody/index.tsx
const TableBody: React.FC<React.PropsWithChildren<Common.Globals>> = ({ children, dataTest }) => (
=======
const TableBody: typeof TableBodyComponent = ({ children, dataTest }) => (
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableBody/index.jsx
  <StyledTableBody dataTest={dataTest}>{children}</StyledTableBody>
);

export default TableBody;
