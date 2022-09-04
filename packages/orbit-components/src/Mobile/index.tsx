import React from "react";

import Hide from "../Hide";
<<<<<<< HEAD
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))

const Desktop = ({ children }: Props) => <Hide on={["desktop", "largeDesktop"]}>{children}</Hide>;

export default Desktop;
