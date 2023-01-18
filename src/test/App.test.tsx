import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it("should initialize state correctly", () => {
    const { container } = render(<App />);
    const matchData = container.querySelector(".match-data");
    const sportEventsData = container.querySelector(".sport-events-data");
    const teamsInfoData = container.querySelector(".teams-info-data");
    if (matchData) {
      expect(matchData.textContent).toBe([]);
    }
    if (sportEventsData) {
      expect(sportEventsData.textContent).toBe([]);
    }
    if (teamsInfoData) {
      expect(teamsInfoData.textContent).toBe([]);
    }
  });
});
