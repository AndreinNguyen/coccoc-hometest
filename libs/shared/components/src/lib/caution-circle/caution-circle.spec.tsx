import { render } from "@testing-library/react";

import CautionCircle from "./caution-circle";

describe("CautionCircle", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CautionCircle />);
    expect(baseElement).toBeTruthy();
  });
});
