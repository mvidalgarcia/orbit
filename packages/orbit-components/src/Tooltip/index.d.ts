// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Placement } from "@popperjs/core/lib/enums";
import * as Common from "../common/common";

type Size = "small" | "medium";
export interface Props extends Common.Globals, Popper {
  readonly children?: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly renderInPortal?: boolean;
  readonly stopPropagation?: boolean;
  readonly enabled?: boolean;
<<<<<<< HEAD
  readonly onShow?: Common.Callback;
=======
  readonly placement?: Placement;
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554))
  readonly tabIndex?: string | number;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly lockScrolling?: boolean;
}

declare const Tooltip: React.FunctionComponent<Props>;
export { Tooltip, Tooltip as default };
