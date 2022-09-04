// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary/types";
import { Theme } from "../defaultTheme";

export interface Props {
  readonly theme: Theme;
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}
<<<<<<< HEAD:packages/orbit-components/src/ThemeProvider/types.ts
=======

declare const ThemeProvider: React.FunctionComponent<Props>;
export { ThemeProvider, ThemeProvider as default };
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ThemeProvider/index.d.ts
