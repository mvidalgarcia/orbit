import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import media from "../utils/mediaQuery";
import { normalize } from "./helpers";
<<<<<<< HEAD:packages/orbit-components/src/Inline/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Inline/index.jsx

const StyledInlineInner = styled.div<{
  viewportSizes: Pick<
    Props,
    "mediumMobile" | "largeMobile" | "tablet" | "desktop" | "largeDesktop"
  >;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ viewportSizes }) => {
    return Object.keys(viewportSizes).map(query => {
      const value = viewportSizes[query];
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      return normalize(value);
    });
  }}
`;

StyledInlineInner.defaultProps = {
  theme: defaultTheme,
};

const Inline = ({
  as: Component = "div",
  mediumMobile,
  largeMobile,
  className,
  tablet,
  desktop,
  largeDesktop,
  children,
  dataTest,
  ...smallMobile
}: Props) => {
  const viewportSizes = { smallMobile, mediumMobile, largeMobile, tablet, desktop, largeDesktop };

  return (
    // @ts-expect-error ts-migrate(3554) FIXME: Property 'children' does not exist on type 'IntrinsicAttributes'.ts(2322)
    <Component className={className} data-test={dataTest}>
      <StyledInlineInner viewportSizes={viewportSizes}>{children}</StyledInlineInner>
    </Component>
  );
};

export default Inline;
