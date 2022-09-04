import { css } from "styled-components";

import {
  getJustify,
  getAlign,
  getDirection,
  getWrap,
  getGrow,
  getShrink,
} from "../../utils/layout";
import getWidth from "./getWidth";
import getDisplay from "./getDisplay";
import getBasis from "./getBasis";
import getSpacingToken from "../../common/getSpacingToken";
<<<<<<< HEAD
import { Devices } from "../../utils/mediaQuery/types";
import { Props } from "../types";
=======
import { Devices } from "../../utils/mediaQuery/index.d";
import { Props } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
import { Theme } from "../../defaultTheme";

interface StyledProps extends Props {
  theme: Theme;
}

const getViewportFlexStyles = (viewport: Devices) => (props: StyledProps): string => {
  const { flex, theme } = props;
  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
    viewport
  ];

  return `
    ${
      flex &&
      css`
        display: ${getDisplay(inline)};
        flex-direction: ${getDirection(direction)};
        flex-wrap: ${getWrap(wrap)};
        flex-grow: ${getGrow(grow)};
        flex-shrink: ${getShrink(shrink)};
<<<<<<< HEAD
        flex-basis: ${getBasis(basis)({ theme })};
=======
        flex-basis: ${getBasis(basis)};
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
        justify-content: ${getJustify(justify)};
        align-content: ${getAlign(align)};
        align-items: ${getAlign(align)};
      `
    };
    width: ${getWidth(inline)};
    margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
  `;
};

export default getViewportFlexStyles;
