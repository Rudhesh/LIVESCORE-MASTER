import React from "react";
import { TeamInfo } from "./interfaces";
import "./main.css";

type Props = {
  awayTeamInfo: TeamInfo[];
  awayScore: TeamInfo[];
  homeTeamInfo: TeamInfo[];
  homeScore: TeamInfo[];
};

export default function Score({
  awayTeamInfo,
  awayScore,
  homeTeamInfo,
  homeScore,
}: Props) {
  const awayScoreData = awayTeamInfo.map((away: TeamInfo) => {
    const score = awayScore.find((s) => s.team_id === away.team_id);
    return score ? 1 : 0;
  });

  const homeScoreData = homeTeamInfo.map((home: TeamInfo) => {
    const score = homeScore.find((s) => s.team_id === home.team_id);
    return score ? 1 : 0;
  });

  return (
    <div>
      <div className="scoreboard">
        <div className="score">
          {awayScoreData.map((score, index) => (
            <div className="teams" key={index}>
              {score}
            </div>
          ))}
        </div>
        <div className="score">
          {awayScoreData.map(() => (
            <div className="teams" key={Math.random()}>
              :
            </div>
          ))}
        </div>
        <div className="score">
          {homeScoreData.map((score, index) => (
            <div className="teams" key={index}>
              {score}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
