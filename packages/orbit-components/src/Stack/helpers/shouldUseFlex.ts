<<<<<<< HEAD:packages/orbit-components/src/Stack/helpers/shouldUseFlex.ts
import { Props } from "../types";
=======
import { Props } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/helpers/shouldUseFlex.js

const shouldUseFlex = (props: Props): boolean =>
  props.flex ||
  Object.keys(props)
    .map(
      item =>
        !(
          item === "children" ||
          item === "spaceAfter" ||
          item === "spacing" ||
          item === "dataTest"
        ),
    )
    .indexOf(true) !== -1;

export default shouldUseFlex;
