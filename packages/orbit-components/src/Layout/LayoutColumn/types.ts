// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/Layout/LayoutColumn/types.ts
import * as Common from "../../common/types";
import { Devices } from "../../utils/mediaQuery/types";
=======
import * as Common from "../../common/common";
import { Devices } from "../../utils/mediaQuery/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Layout/LayoutColumn/index.d.ts

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly as?: string;
  readonly hideOn?: Devices[];
  readonly spanEntireRow?: boolean;
}
