<<<<<<< HEAD
import { Basis } from "../types";
import { Theme } from "../../defaultTheme";

const getBasis = (basis: Basis) => ({ theme }: { theme: Theme }): Basis => {
  if (typeof basis === "undefined") return "";
=======
import { Basis } from "../index.d";
import { Theme } from "../../defaultTheme";

const getBasis = (basis: Basis) => ({ theme }: { theme: Theme }): Basis | null => {
  if (typeof basis === "undefined") return null;
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
  if (typeof basis === "function") return basis(theme);

  return basis;
};

export default getBasis;
