export interface TeamInfo {
  team_id: number;
  team_name: string;
  team_name_short: string;
}
export interface SportEvent {
  event_id: number;
  event_type: string;
  event_time: number;
  match_id: number;
  score_amount: number;
  score_team: string;
}
export interface Match {
  match_id: number;
  tournament_id: number;
  round: number;
  home_team_id: number;
  away_team_id: number;
}
