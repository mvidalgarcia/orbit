import * as React from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import QueryContext from "./index.d";

interface Props {
  children?: React.ReactNode;
}

<<<<<<< HEAD:packages/orbit-components/src/ThemeProvider/QueryContext/Provider.tsx
interface Props {
  children?: React.ReactNode;
}

=======
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ThemeProvider/QueryContext/Provider.jsx
const QueryContextProvider: React.FC<Props> = ({ children }) => {
  const value = useMediaQuery();
  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryContextProvider;
