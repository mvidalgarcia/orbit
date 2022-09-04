import { toast } from "react-hot-toast";

import {
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
<<<<<<< HEAD
} from "./types";
import ToastRoot from "./ToastRoot";

const createToast: createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: createToastPromiseType = (content, options) =>
=======
} from "./index.d";
import ToastRoot from "./ToastRoot";

const createToast: typeof createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: typeof createToastPromiseType = (content, options) =>
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
  toast.promise(content, options);

export { ToastRoot, createToast, createToastPromise };
