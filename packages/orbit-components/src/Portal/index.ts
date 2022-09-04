import * as React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD:packages/orbit-components/src/Portal/index.ts
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Portal/index.js

const Portal = ({ renderInto, children }: Props) => {
  const [el] = React.useState(() => {
    if (typeof window !== "undefined") {
      return document.createElement("div");
    }
    return null;
  });

  const [node] = React.useState(() => {
    if (typeof window !== "undefined") {
      return renderInto && document.getElementById(renderInto)
        ? document.getElementById(renderInto)
        : document.body;
    }
    return null;
  });

  React.useLayoutEffect(() => {
    if (node && el) {
      node.appendChild(el);
    }
    return () => {
      if (node && el) {
        node.removeChild(el);
      }
    };
  }, [el, node]);

  if (typeof window !== "undefined" && el !== null) {
    return ReactDOM.createPortal(children, el);
  }

  return null;
};

export default Portal;
