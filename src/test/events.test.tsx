import React from "react";
import { render } from "@testing-library/react";
import Events from "../components/events";

describe("Events", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Events sportEvents={[]} teamsInfo={[]} match={[]} />
    );
    expect(container).toBeDefined();
  });
});
