// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/NotificationBadge/types.ts
import * as Common from "../common/types";
import { Type } from "../Badge/types";
=======
import * as Common from "../common/common";
import { Type } from "../Badge/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/NotificationBadge/index.d.ts

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}
