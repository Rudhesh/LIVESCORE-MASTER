import React from "react";
import Teams from "./teams";
import { SportEvent, TeamInfo, Match } from "../components/interfaces";

type Props = {
  sportEvents: SportEvent[];
  teamsInfo: TeamInfo[];
  match: Match[];
};

export default function Events({ sportEvents, teamsInfo, match }: Props) {
  // filter matches that match the event match_id
  const filteredMatches: Match[] = match.filter((matchItem: Match) => {
    return sportEvents.some((eventItem: SportEvent) => {
      return matchItem.match_id === eventItem.match_id;
    });
  });
  return (
    <div className="content">
      <div>
        <Teams
          filteredMatches={filteredMatches}
          teamsInfo={teamsInfo}
          sportEvents={sportEvents}
        />
      </div>
      <div></div>
    </div>
  );
}
