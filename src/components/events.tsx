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
  const filteredMatches = match.filter((matchItem: any) => {
    return sportEvents.some((eventItem: any) => {
      return matchItem.match_id === eventItem.match_id;
    });
  });

  return (
    <div className="">
      <div>
        <Teams
          filteredMatches={filteredMatches}
          teamsInfo={teamsInfo}
          sportEvents={sportEvents}
        />
      </div>
    </div>
  );
}
