// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/Stepper/StepperStateless/types.ts
import * as Common from "../../common/types";
import { SharedProps } from "../types";
=======
import * as Common from "../../common/common";
import { SharedProps, Event } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stepper/StepperStateless/index.d.ts

type InputEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends SharedProps, Common.Globals {
<<<<<<< HEAD:packages/orbit-components/src/Stepper/StepperStateless/types.ts
  readonly value?: number | string;
=======
  readonly value?: number | string | (() => string);
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stepper/StepperStateless/index.d.ts
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: InputEvent;
  readonly size?: "small" | "normal";
  readonly onDecrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onIncrement?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly onChange?: InputEvent;
}
