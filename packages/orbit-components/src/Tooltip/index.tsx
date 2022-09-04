import * as React from "react";

import { SIZE_OPTIONS } from "./consts";
import TooltipPrimitive from "../primitives/TooltipPrimitive";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileDialog from "../primitives/MobileDialogPrimitive";
<<<<<<< HEAD:packages/orbit-components/src/Tooltip/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Tooltip/index.jsx

const Tooltip = ({
  children,
  enabled = true,
  onShow,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  id,
  placement,
  lockScrolling,
  renderInPortal = true,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  return isLargeMobile ? (
    <TooltipPrimitive
      dataTest={dataTest}
      id={id}
      tabIndex={tabIndex}
      onShow={onShow}
      enabled={enabled}
      content={content}
      size={size}
      renderInPortal={renderInPortal}
      placement={placement}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
      block={block}
    >
      {children}
    </TooltipPrimitive>
  ) : (
    <MobileDialog
      dataTest={dataTest}
      tabIndex={tabIndex}
      id={id}
      enabled={enabled}
      lockScrolling={lockScrolling}
      content={content}
      removeUnderlinedText={removeUnderlinedText}
      stopPropagation={stopPropagation}
      block={block}
    >
      {children}
    </MobileDialog>
  );
};

export default Tooltip;
