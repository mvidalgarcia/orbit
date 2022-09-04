import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import getSpacing from "../Stack/helpers/getSpacing";
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.jsx

import type { Props } from ".";

const StyledLinkList = styled.ul`
  ${({ $direction, indent, theme, $spacing }) => css`
=======
import getDirectionSpacingTemplate from "../Stack/helpers/getDirectionSpacingTemplate";
import { Props } from "./index.d";
import { Spacing } from "../Stack";

const StyledLinkList = styled.ul<{ $direction?: "column" | "row"; $indent?: boolean }>`
  ${({ $direction, $indent, theme }) => css`
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.tsx
    display: flex;
    flex-direction: ${$direction};
    width: 100%;
    margin: 0;
    padding: 0;
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.jsx
    gap: ${getSpacing({ theme })[$spacing]};
    padding-${left}: ${indent && theme.orbit.spaceXXSmall};
=======
    padding-${left}: ${$indent && theme.orbit.spaceXXSmall};
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.tsx
    list-style: none;
    font-size: ${theme.orbit.fontSizeTextNormal};
  `};
`;

StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.jsx
const StyledNavigationLinkListChild = styled(({ theme, direction, ...props }) => <li {...props} />)`
=======
const resolveSpacings = ({
  $spacing,
  $direction,
  ...props
}: {
  $spacing?: Spacing;
  $direction?: "column" | "row";
}) => {
  const margin =
    $spacing &&
    $direction &&
    String(getDirectionSpacingTemplate($direction)).replace(
      "__spacing__",
      getSpacing(props)[$spacing],
    );

  return css`
    margin: ${margin && rtlSpacing(margin)};
    &:last-child {
      margin: 0;
    }
  `;
};

const StyledNavigationLinkListChild = styled.li<{
  $direction?: "column" | "row";
  $indent?: boolean;
  $spacing: Spacing;
}>`
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.tsx
  ${StyledTextLink} {
    text-decoration: none;
  }

<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.jsx
  ${({ direction }) =>
    direction === "column" &&
=======
  ${resolveSpacings};

  ${({ $direction }) =>
    $direction === "column" &&
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.tsx
    css`
      width: 100%;
      ${StyledTextLink} {
        width: 100%;
        ${mq.tablet(
          css`
            width: auto;
          `,
        )};
      }
    `};
`;

StyledNavigationLinkListChild.defaultProps = {
  theme: defaultTheme,
};

const LinkList = ({
  direction = "column",
  indent,
  spacing = SPACINGS.MEDIUM,
  children,
  id,
  dataTest,
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.jsx
}: Props): React.Node => (
  <StyledLinkList
    indent={indent}
    $spacing={spacing}
    $direction={direction}
    data-test={dataTest}
    id={id}
  >
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild direction={direction}>
=======
}: Props) => (
  <StyledLinkList $indent={indent} $direction={direction} data-test={dataTest} id={id}>
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild $direction={direction} $spacing={spacing}>
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.tsx
            {item}
          </StyledNavigationLinkListChild>
        );
      }
      return null;
    })}
  </StyledLinkList>
);

export default LinkList;
