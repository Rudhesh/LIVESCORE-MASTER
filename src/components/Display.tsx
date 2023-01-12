import React from "react";
import AwayTeamInfo from "./AwayTeamInfo";
import "./main.css";
import HomeTeamInfo from "./HomeTeamInfo";
import Score from "./Score";
import { awayTeam, homeTeam, TeamInfo } from "../components/interfaces";

type Props = {
  awayTeamInfo: TeamInfo[];
  homeTeamInfo: TeamInfo[];
  homeScore: TeamInfo[];
  awayScore: TeamInfo[];
};

export default function Display({
  awayTeamInfo,
  homeTeamInfo,
  homeScore,
  awayScore,
}: Props) {
  return (
    <div className="container">
      <div>
        {awayTeamInfo.map((team: awayTeam) => (
          <AwayTeamInfo awayTeamInfo={team} />
        ))}
      </div>
      <div>
        <Score
          awayTeamInfo={awayTeamInfo}
          awayScore={awayScore}
          homeTeamInfo={homeTeamInfo}
          homeScore={homeScore}
        />
      </div>
      <div>
        {homeTeamInfo.map((team: homeTeam) => (
          <HomeTeamInfo homeTeamInfo={team} />
        ))}
      </div>
    </div>
  );
}
