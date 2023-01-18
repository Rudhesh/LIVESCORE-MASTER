import React from "react";
import { render } from "@testing-library/react";
import Teams from "../components/teams";

describe("Teams", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Teams filteredMatches={[]} teamsInfo={[]} sportEvents={[]} />
    );
    expect(container).toBeDefined();
  });
});
