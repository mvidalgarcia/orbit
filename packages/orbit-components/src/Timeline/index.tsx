import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/Timeline/index.tsx
import * as Common from "../common/types";
=======
import * as Common from "../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Timeline/index.jsx
import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepContext } from "./TimelineContext";
import getSpacingToken from "../common/getSpacingToken";
import themeDefault from "../defaultTheme";
<<<<<<< HEAD:packages/orbit-components/src/Timeline/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Timeline/index.jsx

const WrapperStyled = styled.div<{ spaceAfter?: Common.SpaceAfterSizes }>`
  position: relative;
  overflow: hidden;
  margin-bottom: ${getSpacingToken};
`;

WrapperStyled.defaultProps = {
  theme: themeDefault,
};

const Timeline = ({ children, spaceAfter, direction, dataTest, id }: Props) => {
  const childrenArr = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();

  const getDirection = () => {
    if (direction) return direction;
    return isDesktop ? "row" : "column";
  };

  return childrenArr && childrenArr.length > 0 ? (
    <WrapperStyled spaceAfter={spaceAfter} data-test={dataTest} id={id}>
      <Stack flex shrink direction={getDirection()}>
        <TimelineStatusProvider direction={direction}>
          {React.Children.map(childrenArr, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepContext.Provider
                  value={{ index: i, last: i + 1 === childrenArr.length }}
                >
                  {child}
                </TimelineStepContext.Provider>
              );
            }
            return null;
          })}
        </TimelineStatusProvider>
      </Stack>
    </WrapperStyled>
  ) : null;
};

export default Timeline;
export { default as TimelineStep } from "./TimelineStep";
