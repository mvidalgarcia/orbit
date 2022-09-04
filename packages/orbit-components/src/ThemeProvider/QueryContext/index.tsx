import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/ThemeProvider/QueryContext/index.tsx
import { QueryMap } from "../../hooks/useMediaQuery/types";

=======
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ThemeProvider/QueryContext/index.jsx
export const initialValue = {
  isLargeDesktop: null,
  isDesktop: null,
  isLargeMobile: null,
  isMediumMobile: null,
  isTablet: null,
  prefersReducedMotion: null,
};

<<<<<<< HEAD:packages/orbit-components/src/ThemeProvider/QueryContext/index.tsx
const QueryContext = React.createContext<QueryMap<null | boolean>>(initialValue);
=======
const QueryContext = React.createContext(initialValue);
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ThemeProvider/QueryContext/index.jsx
QueryContext.displayName = "QueryOrbitContext";

export default QueryContext;
