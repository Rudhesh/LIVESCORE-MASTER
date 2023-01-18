import React from "react";
import AwayTeamInfo from "./AwayTeamInfo";
import "./main.css";
import HomeTeamInfo from "./HomeTeamInfo";
import { SportEvent, TeamInfo } from "../components/interfaces";
import Score from "./Score";

type Props = {
  awayTeamInfo: TeamInfo[];
  homeTeamInfo: TeamInfo[];
  homeScore: TeamInfo[];
  awayScore: TeamInfo[];
  sportEvents: SportEvent[];
};

export default function Display({
  awayTeamInfo,
  homeTeamInfo,
  homeScore,
  awayScore,
  sportEvents,
}: Props) {
  return (
    <div className="container">
      <div>
        {awayTeamInfo.map((team: TeamInfo) => (
          <div key={team.team_id}>
            <AwayTeamInfo awayTeam={team} />
          </div>
        ))}
      </div>
      <div>
        <Score
          awayTeamInfo={awayTeamInfo}
          awayScore={awayScore}
          homeTeamInfo={homeTeamInfo}
          homeScore={homeScore}
          sportEvents={sportEvents}
        />
      </div>
      <div>
        {homeTeamInfo.map((team: TeamInfo) => (
          <div key={team.team_id}>
            <HomeTeamInfo homeTeam={team} />
          </div>
        ))}
      </div>
    </div>
  );
}
