// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/types";

export interface Props extends Common.Globals {
<<<<<<< HEAD:packages/orbit-components/src/NavigationBar/types.ts
  readonly onMenuOpen?: Common.Event<React.SyntheticEvent<HTMLAnchorElement | HTMLButtonElement>>;
=======
  readonly onMenuOpen?: React.MouseEventHandler<HTMLAnchorElement>;
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/NavigationBar/index.d.ts
  readonly onShow?: Common.Callback;
  readonly onHide?: Common.Callback;
  readonly children: React.ReactNode;
  readonly hideOnScroll?: boolean;
}
