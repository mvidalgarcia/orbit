import { DIRECTIONS } from "../../utils/layout/consts";
<<<<<<< HEAD:packages/orbit-components/src/Stack/helpers/getDirectionSpacingTemplate.ts
import { Direction } from "../types";
=======
import { Direction } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/helpers/getDirectionSpacingTemplate.js

const getDirectionSpacingTemplate = (direction: Direction): string => {
  switch (direction) {
    case DIRECTIONS.COLUMN:
      return "0 0 __spacing__ 0";
    case DIRECTIONS.ROW:
      return "0 __spacing__ 0 0";
    case DIRECTIONS.COLUMNREVERSE:
      return "__spacing__ 0 0 0";
    case DIRECTIONS.ROWREVERSE:
      return "0 0 0 __spacing__";
    default:
      return "0 0 __spacing__ 0";
  }
};

export default getDirectionSpacingTemplate;
