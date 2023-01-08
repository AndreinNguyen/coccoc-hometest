import { render } from "@testing-library/react";

import Eye from "./eye";

describe("Eye", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Eye />);
    expect(baseElement).toBeTruthy();
  });
});
