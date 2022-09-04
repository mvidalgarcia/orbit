import { SIZE_OPTIONS } from "../consts";
<<<<<<< HEAD:packages/orbit-components/src/primitives/TooltipPrimitive/helpers/tooltipSize.ts
import { Size } from "../types";
=======
import { Size } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/primitives/TooltipPrimitive/helpers/tooltipSize.js

const tooltipSize = ({ size }: { size: Size }): string => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: "240px",
    [SIZE_OPTIONS.MEDIUM]: "380px",
  };

  return sizes[size];
};

export default tooltipSize;
