import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/Itinerary/index.tsx
import * as Common from "../common/types";
=======
import * as Common from "../common/common";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Itinerary/index.jsx
import ItinerarySegmentBanner from "./ItinerarySegment/ItinerarySegmentBanner";
import ItineraryBadgeList, { ItineraryBadgeListItem } from "./ItineraryBadgeList";
import ItinerarySegment from "./ItinerarySegment";
import ItinerarySeparator from "./ItinerarySeparator";
import ItineraryStatus from "./ItineraryStatus";
import ItinerarySegmentStop from "./ItinerarySegment/ItinerarySegmentStop";
import ItinerarySegmentDetail from "./ItinerarySegment/ItinerarySegmentDetail";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";
import { ItineraryProvider } from "./context";
<<<<<<< HEAD:packages/orbit-components/src/Itinerary/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Itinerary/index.jsx

const StyledItineraryWrapper = styled.div<{ spaceAfter?: Common.SpaceAfterSizes }>`
  margin-bottom: ${getSpacingToken};
`;

StyledItineraryWrapper.defaultProps = {
  theme: defaultTheme,
};

const Itinerary = ({ children, dataTest, spaceAfter, id }: Props) => {
  return (
    <StyledItineraryWrapper data-test={dataTest} id={id} spaceAfter={spaceAfter}>
      <ItineraryProvider>{children}</ItineraryProvider>
    </StyledItineraryWrapper>
  );
};

export {
  ItinerarySegment,
  ItinerarySegmentBanner,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItinerarySeparator,
  ItineraryBadgeList,
  ItineraryBadgeListItem,
  ItineraryStatus,
};
export default Itinerary;
