import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UIDReset, UIDFork } from "react-uid";

import Dictionary from "../Dictionary";
import QueryContextProvider from "./QueryContext/Provider";
<<<<<<< HEAD:packages/orbit-components/src/ThemeProvider/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ThemeProvider/index.jsx

const ThemeProvider = ({ theme, dictionary, children }: Props) => {
  return (
    <UIDReset>
      <UIDFork>
        <StyledThemeProvider theme={theme}>
          <QueryContextProvider>
            {dictionary ? (
              <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
            ) : (
              React.Children.only(children)
            )}
          </QueryContextProvider>
        </StyledThemeProvider>
      </UIDFork>
    </UIDReset>
  );
};

export default ThemeProvider;
