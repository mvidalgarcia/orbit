import { useCallback } from "react";

import useDictionary from "../useDictionary";
import { pureTranslate } from "../../Translate";
<<<<<<< HEAD:packages/orbit-components/src/hooks/useTranslate/index.ts
import { Values } from "../../Translate/types";
=======
import { Values } from "../../Translate/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/hooks/useTranslate/index.js

const useTranslate = () => {
  const dictionary = useDictionary();
  return useCallback((key: string, values?: Values) => pureTranslate(dictionary, key, values), [
    dictionary,
  ]);
};

export default useTranslate;
