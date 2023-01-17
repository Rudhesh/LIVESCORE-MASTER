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
  const away: (TeamInfo | undefined)[] = awayTeamInfo.map(
    (away: { team_id: number }) => {
      return awayScore.find((score: { team_id: number }) => {
        if (away.team_id === score.team_id) {
          return <div key={away.team_id}>{1}</div>;
        }
      });
    }
  );

  const home: (TeamInfo | undefined)[] = homeTeamInfo.map(
    (home: { team_id: number }) => {
      return homeScore.find((score: { team_id: number }) => {
        if (home.team_id === score.team_id) {
          return <div key={home.team_id}>{1}</div>;
        }
      });
    }
  );

  return (
    <div>
      <div className="scoreboard">
        <div className="score">
          {" "}
          {away.map((s: TeamInfo | undefined) => {
            if (s) {
              return (
                <div className="teams" key={Math.random()}>
                  {1}
                </div>
              );
            } else {
              return (
                <div className="teams" key={Math.random()}>
                  {0}
                </div>
              );
            }
          })}
        </div>
        <div className="score">
          {" "}
          {away.map((s: TeamInfo | undefined) => {
            return (
              <div className="teams" key={Math.random()}>
                {":"}
              </div>
            );
          })}
        </div>
        <div className="score">
          {" "}
          {home.map((s: TeamInfo | undefined) => {
            if (s) {
              return (
                <div className="teams" key={Math.random()}>
                  {1}
                </div>
              );
            } else {
              return (
                <div className="teams" key={Math.random()}>
                  {0}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
