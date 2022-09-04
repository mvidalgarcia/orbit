import React, { useRef, useState, useCallback } from "react";

<<<<<<< HEAD
import { Event } from "../../common/types";

const useErrorTooltip = <T = HTMLInputElement, K = HTMLLabelElement>({
  onFocus,
}: {
  onFocus?: Event<React.SyntheticEvent<T>>;
=======
import { Event } from "../../common/common";

const useErrorTooltip = ({
  onFocus,
}: {
  onFocus?: Event<React.SyntheticEvent<HTMLInputElement>>;
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
}): {
  tooltipShown: boolean;
  tooltipShownHover: boolean;
  setTooltipShown: React.Dispatch<React.SetStateAction<boolean>>;
  setTooltipShownHover: React.Dispatch<React.SetStateAction<boolean>>;
<<<<<<< HEAD
  labelRef: React.MutableRefObject<K | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  handleFocus: Event<React.SyntheticEvent<T>>;
} => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef<K | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(
    (ev: React.SyntheticEvent<T>) => {
=======
  labelRef: React.MutableRefObject<HTMLLabelElement | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  handleFocus: Event<React.SyntheticEvent<HTMLInputElement>>;
} => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(
    (ev: React.SyntheticEvent<HTMLInputElement>) => {
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
      if (onFocus) onFocus(ev);
      setTooltipShown(true);
    },
    [onFocus],
  );

  return {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
  };
};

export default useErrorTooltip;
