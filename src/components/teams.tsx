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
  const awayTeamInfo: TeamInfo[] = teamsInfo.filter((team: TeamInfo) => {
    return filteredMatches.some((match: Match) => {
      return team.team_id === match.away_team_id;
    });
  });
  //filter team information according to match's home team id
  const homeTeamInfo: TeamInfo[] = teamsInfo.filter((team: TeamInfo) => {
    return filteredMatches.some((match: Match) => {
      return team.team_id === match.home_team_id;
    });
  });

  let score: Match[] = filteredMatches.filter((team: Match) => {
    return sportEvents.some(
      (match: SportEvent) =>
        match.score_team === "home" && team.match_id === match.match_id
    );
  });

  const homeScore: TeamInfo[] = teamsInfo.filter((team: TeamInfo) => {
    return score.some((match: Match) => {
      return team.team_id === match.home_team_id;
    });
  });

  const awayScore: TeamInfo[] = teamsInfo.filter((team: TeamInfo) => {
    return score.some((match: Match) => {
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
