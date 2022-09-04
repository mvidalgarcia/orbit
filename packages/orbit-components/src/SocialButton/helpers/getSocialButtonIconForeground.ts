import { TOKENS } from "../consts";
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import { Theme } from "../../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/SocialButton/helpers/getSocialButtonIconForeground.ts
import { Type } from "../types";
=======
import { Type } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/SocialButton/helpers/getSocialButtonIconForeground.js

const getSocialButtonIconForeground = ({
  theme,
  type,
}: {
  theme: Theme;
  type: Type;
}): { foreground: string } => ({
  foreground: getSocialButtonTypeToken(TOKENS.iconColor, type, theme),
});

export default getSocialButtonIconForeground;
