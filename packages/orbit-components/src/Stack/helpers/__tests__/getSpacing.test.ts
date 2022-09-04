import getSpacing from "../getSpacing";
import theme from "../../../defaultTheme";

describe("#getSpacing", () => {
  it("should return spacings", () => {
<<<<<<< HEAD:packages/orbit-components/src/Stack/helpers/__tests__/getSpacing.test.js
    expect(getSpacing({ theme })).toEqual({
      none: "unset",
=======
    expect(getSpacing(theme)).toEqual({
>>>>>>> b173f52e1 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Stack/helpers/__tests__/getSpacing.test.ts
      large: "24px",
      medium: "16px",
      small: "12px",
      XLarge: "32px",
      XSmall: "8px",
      XXLarge: "40px",
      XXSmall: "4px",
      XXXSmall: "2px",
    });
  });
});
