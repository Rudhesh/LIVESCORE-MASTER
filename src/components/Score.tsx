import React from "react";
import "./main.css";

type Props = {
  awayTeamInfo: any;
  awayScore: any;
  homeTeamInfo: any;
  homeScore: any;
};

export default function Score({
  awayTeamInfo,
  awayScore,
  homeTeamInfo,
  homeScore,
}: Props) {
  const away = awayTeamInfo.map((away: { team_id: number }) => {
    return awayScore.find((score: { team_id: number }) => {
      if (away.team_id === score.team_id) {
        return <div key={away.team_id}>{1}</div>;
      }
    });
  });

  const home = homeTeamInfo.map((home: { team_id: number }) => {
    return homeScore.find((score: { team_id: number }) => {
      if (home.team_id === score.team_id) {
        return <div key={home.team_id}>{1}</div>;
      }
    });
  });

  return (
    <div>
      <div key={""} className="scoreboard">
        <div className="score">
          {" "}
          {away.map((awa: number) => {
            if (awa) {
              return (
                <div className="teams" key={away.team_id}>
                  {1}
                </div>
              );
            } else {
              return (
                <div className="teams" key={away.team_id}>
                  {0}
                </div>
              );
            }
          })}
        </div>
        <div className="score">
          {" "}
          {away.map((awa: number) => {
            return (
              <div className="teams" key={away.team_id}>
                {":"}
              </div>
            );
          })}
        </div>
        <div className="score">
          {" "}
          {home.map((awa: number) => {
            if (awa) {
              return (
                <div className="teams" key={away.team_id}>
                  {1}
                </div>
              );
            } else {
              return (
                <div className="teams" key={away.team_id}>
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
