import * as React from "react";

<<<<<<< HEAD
import { Translations } from "./types";
=======
import { Translations } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))

const DictionaryContext = React.createContext<Translations>({});
DictionaryContext.displayName = "DictionaryOrbitContext";

export default DictionaryContext;
