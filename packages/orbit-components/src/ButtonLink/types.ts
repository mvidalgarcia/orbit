// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/ButtonLink/types.ts
import * as Common from "../common/types";
import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";
=======
import * as Common from "../common/common";
import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ButtonLink/index.d.ts

export type Type = "primary" | "secondary" | "critical";

export interface Props extends Common.Globals, Common.Ref, Common.SpaceAfter, ButtonCommonProps {
  readonly compact?: boolean;
  readonly type?: Type;
  readonly size?: Size;
}

declare const ButtonLink: React.FunctionComponent<Props>;
export { ButtonLink, ButtonLink as default };
