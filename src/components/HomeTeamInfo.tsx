import React from "react";
import { TeamInfo } from "./interfaces";

type Props = { homeTeam: TeamInfo };

export default function AwayTeamInfo({ homeTeam }: Props) {
  return (
    <div key={homeTeam.team_id} className="container">
      <div>
        {" "}
        <img
          src={`/images/logo_${homeTeam.team_id}.png`}
          alt="Image from folder"
        />
      </div>
      <div> {homeTeam.team_name_short}</div>
    </div>
  );
}
