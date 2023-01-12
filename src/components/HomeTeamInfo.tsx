import React from "react";

type Props = { homeTeamInfo: any };

export default function AwayTeamInfo({ homeTeamInfo }: Props) {
  return (
    <div key={homeTeamInfo.team_id} className="container">
      <div>
        {" "}
        <img
          src={`/images/logo_${homeTeamInfo.team_id}.png`}
          alt="Image from folder"
        />
      </div>
      <div> {homeTeamInfo.team_name_short}</div>
    </div>
  );
}
