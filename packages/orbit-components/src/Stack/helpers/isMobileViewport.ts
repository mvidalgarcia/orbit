<<<<<<< HEAD:packages/orbit-components/src/Stack/helpers/isMobileViewport.ts
import { Devices } from "../../utils/mediaQuery/types";
=======
import { Devices } from "../../utils/mediaQuery/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/helpers/isMobileViewport.js

const isMobileViewport = (viewport: Devices): boolean =>
  viewport === "smallMobile" || viewport === "mediumMobile" || viewport === "largeMobile";

export default isMobileViewport;
