import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/Table/TableFooter/index.tsx
import * as Common from "../../common/types";
=======
import { TableFooter as TableFooterType } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableFooter/index.jsx
import defaultTheme from "../../defaultTheme";

export const StyledTableFooter = styled(({ children, className, dataTest }) => (
  <tfoot className={className} data-test={dataTest}>
    {children}
  </tfoot>
))`
  width: 100%;
  white-space: nowrap;
  background: ${({ theme }) => theme.orbit.paletteCloudNormal};
  font-weight: bold;
`;

StyledTableFooter.defaultProps = {
  theme: defaultTheme,
};

<<<<<<< HEAD:packages/orbit-components/src/Table/TableFooter/index.tsx
const TableFooter: React.FC<React.PropsWithChildren<Common.Globals>> = ({ children, dataTest }) => (
=======
const TableFooter: typeof TableFooterType = ({ children, dataTest }) => (
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Table/TableFooter/index.jsx
  <StyledTableFooter dataTest={dataTest}>{children}</StyledTableFooter>
);

export default TableFooter;
