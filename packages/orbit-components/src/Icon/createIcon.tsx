import * as React from "react";

import whiteListProps from "./helpers/whiteListProps";
<<<<<<< HEAD:packages/orbit-components/src/Icon/createIcon.tsx
import { Props } from "./types";

import OrbitIcon from ".";

=======
import OrbitIcon, { Props } from "./index.d";

>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Icon/createIcon.jsx
const createIcon = (
  def: React.ReactNode,
  viewBox: string,
  displayName: string,
): React.ComponentType<Props> => {
  const icon = props => (
    <OrbitIcon viewBox={viewBox} {...whiteListProps(props)}>
      {def}
    </OrbitIcon>
  );
  icon.displayName = displayName;
  return icon;
};

export default createIcon;
