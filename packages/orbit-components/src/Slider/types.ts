// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Label = string | string[];
export type Value = number | number[];
export type Data = number[];
export type Callback = (value: Value) => void | Promise<void>;

export interface Props extends Common.Globals {
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly step?: number;
  readonly defaultValue?: Value;
  readonly onChange?: Callback;
  readonly onChangeBefore?: Callback;
  readonly onChangeAfter?: Callback;
  readonly label?: Common.Translation;
  readonly valueDescription?: Common.Translation;
  readonly ariaLabel?: Label;
  readonly ariaValueText?: string;
  readonly histogramData?: Data;
  readonly histogramDescription?: Common.Translation;
  readonly histogramLoading?: boolean;
  readonly histogramLoadingText?: Common.Translation;
}

export interface State {
  value: Value;
  handleIndex: number | null;
  focused: boolean;
}
<<<<<<< HEAD:packages/orbit-components/src/Slider/types.ts
=======

declare const Slider: React.FunctionComponent<Props>;
export { Slider, Slider as default };
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Slider/index.d.ts
