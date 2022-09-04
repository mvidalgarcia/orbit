<<<<<<< HEAD
import { Globals } from "../../common/types";
import { Size, Color } from "../types";
=======
import { Globals } from "../../common/common";
import { Size, Color } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))

const ALLOWED_PROPS = [
  "size",
  "color",
  "customColor",
  "className",
  "dataTest",
  "ariaHidden",
  "reverseOnRtl",
  "ariaLabel",
  "dataTest",
];

interface Props extends Globals {
  size?: Size;
  color?: Color;
  className?: string;
  customColor?: string;
  ariaHidden?: boolean;
  reverseOnRtl?: boolean;
  ariaLabel?: string;
}

const whiteListProps = (props: Props) =>
  Object.assign({}, ...ALLOWED_PROPS.map(k => (k in props ? { [k]: props[k] } : {})));

export default whiteListProps;
