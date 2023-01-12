export interface SportEvent {
  match_id: string;
  score_team: string;
  score: number;
  time: number;
}
export interface TeamInfo {
  team_id: string;
  team_name: string;
  team_logo: string;
  team_name_short: string;
}

export interface Team {
  team_id: number;
  team_name: string;
  team_logo: string;
  team_name_short: string;
}
export interface Match {
  match_id: string;
  home_team_id: string;
  away_team_id: string;
  match_status: string;
}

export interface awayTeam {
  team_id: string;
  team_name: string;
  team_logo: string;
}
export interface homeTeam {
  team_id: string;
  team_name: string;
  team_logo: string;
}
export interface sportEvent {
  match_id: string;
  score_team: string;
  score: number;
  time: number;
}
export interface homeScore {
  score: number;
  team_name: string;
}
export interface awayScore {
  score: number;
  team_name: string;
}
