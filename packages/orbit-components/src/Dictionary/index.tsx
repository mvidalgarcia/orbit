import * as React from "react";

import { pureTranslate } from "../Translate";
import DictionaryContext from "./DictionaryContext";
<<<<<<< HEAD:packages/orbit-components/src/Dictionary/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Dictionary/index.jsx

const Dictionary = ({ values, children }: Props) => (
  <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
);

export function withDictionary(Component: React.ComponentType<any>) {
  return function DictionaryComponent(props: any) {
    return (
      <DictionaryContext.Consumer>
        {dictionary => (
          <Component
            {...props}
            translate={(tKey, values) => pureTranslate(dictionary, tKey, values)}
          />
        )}
      </DictionaryContext.Consumer>
    );
  };
}

export default Dictionary;
