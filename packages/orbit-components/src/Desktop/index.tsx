import * as React from "react";

import Hide from "../Hide";
<<<<<<< HEAD:packages/orbit-components/src/Desktop/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Desktop/index.jsx

const Desktop = ({ children }: Props) => (
  <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>{children}</Hide>
);

export default Desktop;
