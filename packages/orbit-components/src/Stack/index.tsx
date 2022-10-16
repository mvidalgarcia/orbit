import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import mediaQueries from "../utils/mediaQuery";
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS } from "../utils/layout/consts";
import { DEVICES } from "../utils/mediaQuery/consts";
import { isDefined } from "../utils/layout";
import getViewportFlexStyles from "./helpers/getViewportFlexStyles";
import getGap from "./helpers/getGap";
import shouldUseFlex from "./helpers/shouldUseFlex";
import { Props } from "./index.d";

const StyledStack = styled(({ className, element: Element, children, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
))`
  // just apply all mediaQueries
  // smallMobile - default values are not mediaQuery and needs to be rendered differently
  ${props =>
    Object.values(DEVICES).map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) && getViewportFlexStyles(viewport)};
            ${getGap({ viewport, index, devices })}
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportFlexStyles(viewport)};
            ${getGap({ viewport, index, devices })}
          `,
    )};
`;

StyledStack.defaultProps = {
  theme: defaultTheme,
};

const Stack = (props: Props) => {
  const {
    dataTest,
    inline = false,
    spacing = SPACINGS.MEDIUM,
    align = ALIGNS.START,
    justify = JUSTIFY.START,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    spaceAfter,
    children,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    as = "div",
  } = props;

  const isFlex = shouldUseFlex(props);
  const direction = props.direction || (isFlex ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

  const smallMobile = {
    direction,
    align,
    justify,
    wrap,
    grow,
    basis,
    inline,
    shrink,
    spacing,
    spaceAfter,
  };

  return (
    <StyledStack
      dataTest={dataTest}
      flex={isFlex}
      smallMobile={smallMobile}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
      element={as}
    >
      {children}
    </StyledStack>
  );
};
export default Stack;
