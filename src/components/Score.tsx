import React from "react";
import { SportEvent, TeamInfo } from "./interfaces";
import "./main.css";

type Props = {
  awayTeamInfo: TeamInfo[];
  awayScore: TeamInfo[];
  homeTeamInfo: TeamInfo[];
  homeScore: TeamInfo[];
  sportEvents: SportEvent[];
};

export default function Score({
  awayTeamInfo,
  awayScore,
  homeTeamInfo,
  homeScore,
  sportEvents,
}: Props) {
  // Create an array of score amounts for the away team
  const awayScoreData = awayTeamInfo.map((away: TeamInfo) => {
    const score = awayScore.find((s) => s.team_id === away.team_id);

    return score ? sportEvents.find((item) => item.score_amount) : 0;
  });

  // Create an array of score amounts for the home team
  const homeScoreData = homeTeamInfo.map((home: TeamInfo) => {
    const score = homeScore.find((s) => s.team_id === home.team_id);

    return score ? sportEvents.find((item) => item.score_amount) : 0;
  });

  return (
    <div>
      <div className="scoreboard">
        <div className="score">
          {awayScoreData.map((score, index) => (
            <div className="teams" key={index}>
              {score ? score.score_amount : 0}
            </div>
          ))}
        </div>
        {/* Display a colon separator */}
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
              {score ? score.score_amount : 0}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
