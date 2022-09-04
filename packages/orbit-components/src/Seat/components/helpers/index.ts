import { Theme } from "../../../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/Seat/components/helpers/index.ts
import { Type } from "../../types";
=======
import { Type } from "../../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Seat/components/helpers/index.js
import resolveAccentColor from "./resolveAccentColor";
import resolveFocusColor from "./resolveFocusColor";
import resolveFillColor from "./resolveFillColor";
import resolveHoverColor from "./resolveHoverColor";
import resolveTextColor from "./resolveTextColor";
import resolveCloseIconColor from "./resolveCloseIconColor";

export interface Params {
  theme: Theme;
  type?: Type;
  selected?: boolean;
  hover?: boolean;
  focus?: boolean;
}

export {
  resolveAccentColor,
  resolveFocusColor,
  resolveFillColor,
  resolveHoverColor,
  resolveTextColor,
  resolveCloseIconColor,
};
