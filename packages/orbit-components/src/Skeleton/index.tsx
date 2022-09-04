import * as React from "react";

import Svg from "./Svg";
import * as Presets from "./presets";
<<<<<<< HEAD:packages/orbit-components/src/Skeleton/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Skeleton/index.jsx

const Skeleton = ({ preset, ...props }: Props) => {
  const Component = preset ? Presets[preset] : Svg;

  return <Component {...props} />;
};

export default Skeleton;
