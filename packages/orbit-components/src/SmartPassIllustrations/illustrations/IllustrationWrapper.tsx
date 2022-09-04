import * as React from "react";

import theme from "../../defaultTheme";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
<<<<<<< HEAD:packages/orbit-components/src/SmartPassIllustrations/illustrations/IllustrationWrapper.tsx
import { Props } from "../types";
=======
import { Props } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/SmartPassIllustrations/illustrations/IllustrationWrapper.jsx

const tokens = {
  [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.heightIllustrationSmall,
  [SIZE_OPTIONS.SMALL]: "120px",
  [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
  [SIZE_OPTIONS.LARGE]: "280px",
  [SIZE_OPTIONS.DISPLAY]: "460px",
};

interface WrapperProps extends Props {
  viewBox: string;
  children: React.ReactNode;
}

const IllustrationWrapper = ({
  size = "medium",
  viewBox,
  title,
  description,
  ariaLabelledby,
  dataTest,
  children,
}: WrapperProps) => {
  const height = tokens[size];

  return (
    <svg
      height={height}
      data-test={dataTest}
      viewBox={viewBox}
      fill="none"
      role="img"
      aria-labelledby={ariaLabelledby}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={ariaLabelledby}>{title}</title>
      <desc>{description}</desc>
      {children}
    </svg>
  );
};

export default IllustrationWrapper;
