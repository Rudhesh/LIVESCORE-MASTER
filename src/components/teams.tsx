import React from "react";
import Display from "./Display";
import { SportEvent, TeamInfo, Match } from "../components/interfaces";

type Props = {
  filteredMatches: Match[];
  teamsInfo: TeamInfo[];
  sportEvents: SportEvent[];
};

export default function Teams({
  filteredMatches,
  teamsInfo,
  sportEvents,
}: Props) {
  //filter team information according to match's away team id
  const awayTeamInfo: TeamInfo[] = teamsInfo.filter((team) => {
    return filteredMatches.some((match: any) => {
      return team.team_id === match.away_team_id;
    });
  });
  //filter team information according to match's home team id
  const homeTeamInfo: TeamInfo[] = teamsInfo.filter((team) => {
    return filteredMatches.some((match: any) => {
      return team.team_id === match.home_team_id;
    });
  });

  let score = filteredMatches.filter((team) => {
    return sportEvents.some(
      (match: any) =>
        match.score_team === "home" && team.match_id === match.match_id
    );
  });

  const homeScore: TeamInfo[] = teamsInfo.filter((team) => {
    return score.some((match: any) => {
      return team.team_id === match.home_team_id;
    });
  });

  const awayScore: TeamInfo[] = teamsInfo.filter((team) => {
    return score.some((match) => {
      return team.team_id === match.away_team_id;
    });
  });
  return (
    <div>
      <Display
        awayScore={awayScore}
        homeScore={homeScore}
        awayTeamInfo={awayTeamInfo}
        homeTeamInfo={homeTeamInfo}
      />
    </div>
  );
}
