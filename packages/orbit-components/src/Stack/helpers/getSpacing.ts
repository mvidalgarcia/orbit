import { SPACINGS } from "../../utils/layout/consts";
import { Theme } from "../../defaultTheme";

<<<<<<< HEAD:packages/orbit-components/src/Stack/helpers/getSpacing.js
const getSpacing: GetSpacing = ({ theme }) => ({
  none: "unset",
=======
const getSpacing = (theme: Theme): Record<string, string> => ({
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/helpers/getSpacing.ts
  [SPACINGS.XXXSMALL]: theme.orbit.spaceXXXSmall,
  [SPACINGS.XXSMALL]: theme.orbit.spaceXXSmall,
  [SPACINGS.XSMALL]: theme.orbit.spaceXSmall,
  [SPACINGS.SMALL]: theme.orbit.spaceSmall,
  [SPACINGS.MEDIUM]: theme.orbit.spaceMedium,
  [SPACINGS.LARGE]: theme.orbit.spaceLarge,
  [SPACINGS.XLARGE]: theme.orbit.spaceXLarge,
  [SPACINGS.XXLARGE]: theme.orbit.spaceXXLarge,
});

export default getSpacing;
