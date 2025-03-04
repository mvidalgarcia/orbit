import React from "react";
import { NavigationBar, ButtonLink, Stack, CountryFlag } from "@kiwicom/orbit-components";
import {
  Accommodation,
  AccountCircle,
  AirplaneTakeoff,
  Partners,
  QuestionCircle,
} from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <NavigationBar>
      <Stack direction="row" align="center" justify="center">
        <ButtonLink href="https://orbit.kiwi">
          <div style={{ maxWidth: "40px", overflow: "hidden" }}>
            <img
              src="https://images.kiwi.com/common/orbit-logo-full.png"
              alt="Orbit by Kiwi.com"
              height="40px"
            />
          </div>
        </ButtonLink>
        <ButtonLink type="secondary" iconLeft={<AirplaneTakeoff />} title="Travel" />
        <ButtonLink type="secondary" iconLeft={<Accommodation />} title="Rooms" />
        <ButtonLink type="secondary" iconLeft={<Partners />} title="Careers" />
        <Stack justify="end" inline>
          <ButtonLink type="secondary" iconLeft={<CountryFlag code="gb" />} title="English" />
          <ButtonLink type="secondary" iconLeft={<QuestionCircle />} title="Help" />
          <ButtonLink type="secondary" iconLeft={<AccountCircle />} title="My account" />
        </Stack>
      </Stack>
    </NavigationBar>
  ),
};
