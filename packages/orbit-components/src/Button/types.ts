// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

<<<<<<< HEAD:packages/orbit-components/src/Button/types.ts
import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";
=======
import * as React from "react";

import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Button/index.d.ts

export type Type =
  | "primary"
  | "secondary"
  | "critical"
  | "primarySubtle"
  | "criticalSubtle"
  | "white"
  | "bundleBasic"
  | "bundleMedium"
  | "bundleTop";

export type ButtonStates = "default" | "hover" | "active" | "focus";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
  readonly size?: Size;
}
