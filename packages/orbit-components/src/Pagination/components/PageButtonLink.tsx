import * as React from "react";

<<<<<<< HEAD:packages/orbit-components/src/Pagination/components/PageButtonLink.tsx
import * as Common from "../../common/types";
import ButtonLink from "../../ButtonLink";
import { OnPageChange } from "../types";
=======
import * as Common from "../../common/common";
import ButtonLink from "../../ButtonLink";
import { OnPageChange } from "../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Pagination/components/PageButtonLink.jsx

export interface Props {
  children: number;
  onPageChange: OnPageChange;
  size: Common.InputSize;
}

const PageButtonLink = ({ children, onPageChange, size }: Props) => (
  <ButtonLink onClick={() => onPageChange(children)} type="secondary" size={size}>
    {children}
  </ButtonLink>
);

export default PageButtonLink;
