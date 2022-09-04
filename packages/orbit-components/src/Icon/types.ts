// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import defaultTheme from "../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/Icon/types.ts
import * as Common from "../common/types";

export type Size = "small" | "medium" | "large";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "critical";
=======
import * as Common from "../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Icon/index.d.ts

export type Size = "small" | "medium" | "large";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "critical";

export interface Props extends Common.Globals {
  readonly size?: Size;
  readonly color?: Color;
  readonly className?: string;
  readonly customColor?: string;
  readonly reverseOnRtl?: boolean;
  readonly ariaLabel?: string;
  readonly ariaHidden?: boolean;
}

export interface FactoryProps extends Props {
  readonly children: React.ReactNode;
  readonly viewBox: string;
}

export type GetSize = (size: Size) => ({ theme }: { theme: typeof defaultTheme }) => string;
<<<<<<< HEAD:packages/orbit-components/src/Icon/types.ts
=======

declare const Icon: React.FunctionComponent<FactoryProps>;
declare const getSize: GetSize;

export { Icon, getSize, Icon as default };
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Icon/index.d.ts
