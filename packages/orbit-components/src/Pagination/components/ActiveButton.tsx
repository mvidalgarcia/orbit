import * as React from "react";
import styled, { css } from "styled-components";

<<<<<<< HEAD
import * as Common from "../../common/types";
=======
import * as Common from "../../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554))
import Button from "../../Button";
import defaultTheme from "../../defaultTheme";

interface Props {
  children: React.ReactNode;
  transparent?: boolean;
  size?: Common.InputSize;
}

const StyledButton = styled.div<Props>`
  ${({ theme, transparent }) => css`
    &:hover,
    &:active,
    &:focus {
      background: ${theme.orbit.backgroundButtonSecondary};
      color: ${theme.orbit.colorTextButtonSecondary};
      transform: none;
      cursor: default;
    }

    ${transparent &&
    css`
      &&& {
        background-color: transparent;
        box-shadow: none;
      }
    `};
  `}
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const ActiveButton = ({ children, transparent, size }: Props) => {
  return (
    <Button
      type="secondary"
      size={size}
      asComponent={(props: Props) => <StyledButton {...props} transparent={transparent} />}
    >
      {children}
    </Button>
  );
};

export default ActiveButton;
