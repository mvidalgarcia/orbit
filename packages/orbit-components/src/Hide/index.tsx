import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getViewportHideStyles from "./helpers/getViewportHideStyles";
import getDisplay from "./helpers/getDisplay";
<<<<<<< HEAD:packages/orbit-components/src/Hide/index.tsx
import { Props } from "./types";
import { Devices } from "../utils/mediaQuery/types";
=======
import { Props } from "./index.d";
import { Devices } from "../utils/mediaQuery/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Hide/index.jsx

const StyledHide = styled.div<{ on: Devices[]; $block?: boolean }>`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} $block={block}>
    {children}
  </StyledHide>
);

export default Hide;
