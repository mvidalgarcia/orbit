// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Theme } from "../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/Stack/types.ts
import * as Common from "../common/types";
=======
import * as Common from "../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/index.d.ts

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Align = "start" | "end" | "center" | "stretch" | "baseline";
export type Justify = "start" | "end" | "center" | "between" | "around";
export type Basis = string | ((theme: Theme) => string);
export type Spacing =
  | "none"
  | "XXXSmall"
  | "XXSmall"
  | "XSmall"
  | "small"
  | "medium"
  | "large"
  | "XLarge"
  | "XXLarge";

interface MediaQuery extends Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: Basis;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
}

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly flex?: boolean;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: Basis;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly as?: string;
  readonly largeDesktop?: MediaQuery;
  readonly children: React.ReactNode;
}
