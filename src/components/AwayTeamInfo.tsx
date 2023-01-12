import React from "react";

type Props = {
  awayTeamInfo: any;
};

export default function AwayTeamInfo({ awayTeamInfo }: Props) {
  return (
    <div key={awayTeamInfo.team_id} className="container">
      <div>{awayTeamInfo.team_name_short}</div>{" "}
      <div>
        <img
          src={`/images/logo_${awayTeamInfo.team_id}.png`}
          alt="Image from folder"
        />
      </div>{" "}
    </div>
  );
}
