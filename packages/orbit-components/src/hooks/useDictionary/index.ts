import React from "react";

import DictionaryContext from "../../Dictionary/DictionaryContext";
<<<<<<< HEAD
import { Translations } from "../../Dictionary/types";
=======
import { Translations } from "../../Dictionary/index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))

const useDictionary = (): Translations => React.useContext(DictionaryContext);

export default useDictionary;
