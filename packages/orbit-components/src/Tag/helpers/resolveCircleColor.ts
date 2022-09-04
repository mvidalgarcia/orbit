import { TYPES } from "../consts";
<<<<<<< HEAD:packages/orbit-components/src/Tag/helpers/resolveCircleColor.ts
import { Type } from "../types";
=======
import { Type } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Tag/helpers/resolveCircleColor.js
import { Theme } from "../../defaultTheme";

const resolveColor = () => ({
  theme,
  selected,
  type,
}: {
  theme: Theme;
  selected?: boolean;
  type?: Type;
}): string => {
  if (selected) return theme.orbit.paletteWhite;
  return type === TYPES.NEUTRAL ? theme.orbit.paletteInkDark : theme.orbit.paletteBlueDarker;
};

export default resolveColor;
