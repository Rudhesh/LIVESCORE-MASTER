import React from "react";
import { TeamInfo } from "./interfaces";

type Props = {
  awayTeam: TeamInfo;
};

export default function AwayTeamInfo({ awayTeam }: Props) {
  return (
    <div key={awayTeam.team_id} className="container">
      <div>{awayTeam.team_name_short}</div>{" "}
      <div>
        <img
          src={`/images/logo_${awayTeam.team_id}.png`}
          alt="Image from folder"
        />
      </div>{" "}
    </div>
  );
}
