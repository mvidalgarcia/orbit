import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Close from "../../icons/Close";
import useTranslate from "../../hooks/useTranslate";
<<<<<<< HEAD:packages/orbit-components/src/Modal/ModalCloseButton/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Modal/ModalCloseButton/index.jsx

const ModalCloseButton = ({ onClick, dataTest }: Props) => {
  const translate = useTranslate();

  return (
    <ButtonLink
      onClick={onClick}
      size="normal"
      iconLeft={<Close />}
      dataTest={dataTest}
      type="secondary"
      title={translate("button_close")}
    />
  );
};

export default ModalCloseButton;
