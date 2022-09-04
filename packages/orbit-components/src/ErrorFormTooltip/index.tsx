import * as React from "react";

import Tooltip from "./Tooltip";
<<<<<<< HEAD:packages/orbit-components/src/ErrorFormTooltip/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/ErrorFormTooltip/index.jsx

const ErrorFormTooltip = ({
  shown,
  onShown,
  error,
  help,
  helpClosable = true,
  ...props
}: Props) => {
  return (
    <>
      {shown && help && !error && (
        <Tooltip
          isHelp
          shown={shown}
          helpClosable={helpClosable}
          onShown={() => onShown(prev => !prev)}
          {...props}
        >
          {help}
        </Tooltip>
      )}
      {shown && error && (
        <Tooltip
          shown={shown}
          helpClosable={helpClosable}
          onShown={value => onShown(value)}
          {...props}
        >
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
