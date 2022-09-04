import { css, FlattenInterpolation, ThemeProps } from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/ErrorFormTooltip/Tooltip/helpers/resolvePlacement.ts
import * as Common from "../../../common/types";
=======
import * as Common from "../../../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ErrorFormTooltip/Tooltip/helpers/resolvePlacement.js
import type { Theme } from "../../../defaultTheme";
import { left } from "../../../utils/rtl";

export type ResolvePlacement = ({
  inputSize,
  theme,
  placement,
  inlineLabel,
}: {
  inputSize?: Common.InputSize;
  theme: Theme;
  placement?: string;
  inlineLabel?: boolean;
}) => FlattenInterpolation<ThemeProps<any>>;

const resolvePlacement: ResolvePlacement = ({ inputSize, theme, placement, inlineLabel }) => {
  const vertical = placement === "top-start" || placement === "top-end" ? "bottom" : "top";

  if (inputSize === "normal") {
    if (theme.rtl) {
      return css`
        ${vertical}: 2px;
        ${left}: ${inlineLabel ? "4px" : "0px"}
      `;
    }

    return css`
      ${vertical}: 2px;
      ${left}: ${inlineLabel ? "12px" : "8px"};
    `;
  }

  if (theme.rtl) {
    return css`
      ${vertical}: 2px;
      ${left}: 0px;
    `;
  }

  return css`
    ${vertical}: 2px;
    ${left}: ${inlineLabel ? "8px" : "8px"};
  `;
};

export default resolvePlacement;
