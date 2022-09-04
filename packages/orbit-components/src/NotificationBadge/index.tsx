import * as React from "react";
import styled from "styled-components";

import Badge from "../Badge";
import { StyledBadge } from "../primitives/BadgePrimitive";
import defaultTheme from "../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/NotificationBadge/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/NotificationBadge/index.jsx

const StyledNotificationBadge = styled.div`
  ${StyledBadge} {
    width: ${({ theme }) => theme.orbit.widthBadgeCircled};
    padding: 0;
  }
`;

StyledNotificationBadge.defaultProps = {
  theme: defaultTheme,
};

const NotificationBadge = ({ type, children, icon, ariaLabel, dataTest, id }: Props) => {
  return (
    <StyledNotificationBadge>
      <Badge type={type} dataTest={dataTest} id={id} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </Badge>
    </StyledNotificationBadge>
  );
};

export default NotificationBadge;
