<?php

$feed_args = [
    'unique_tournament_id' => 14149,
    'client_id' => 569,
    'hosted_solution_alias' => 'srvirtualgaming4',
    'language' => 'en',
    'timezone' => 'Europe:Berlin',
    'stage' => 'league',
    'season' => null,
    'matchday' => null
];

$feed_data = [
    'timings' => null,
    'settings' => null,
    'scores' => null,
    'events' => null
];

$timings_url = 'http://vfstaging.aitcloud.de/vflmstaging/mobile/timings?clientid={client_id}&lang={language}&action=default';
$scores_url = 'http://vfdirectdatastaging-vs001.akamaized.net/{unique_tournament_id}/{hosted_solution_alias}/{language}/{timezone}/vf_livescore/{season}/{stage}/{matchday}';
$events_url = 'http://vfdirectdatastaging-vs001.akamaized.net/{unique_tournament_id}/{hosted_solution_alias}/{language}/{timezone}/vf_liveevents/{season}/{stage}/{matchday}';
$settings_url = 'http://vfstaging.aitcloud.de/vflmstaging/mobile/settings?clientid={client_id}&lang={language}';

$event_type_ids = [
    'match_started' => 10,
    'match_ended' => 20,
    'second_period_start' => 23,
    'goal' => 30
];

$event_type_names = [
    10 => 'match_start',
    20 => 'match_end',
    23 => 'match_halftime',
    30 => 'goal',

];

// ########################## FUNCTIONS ##########################

function get_feed( $url_pattern, $args ) {
    $url = $url_pattern;
    foreach( $args as $k => $v ) {
        $url = str_replace( '{' . $k . '}', $v, $url );
    }
    return json_decode( file_get_contents( $url ) );
}

function get_timings_feed() {
    global $timings_url, $feed_args;
    return get_feed( $timings_url, $feed_args );
}

function extract_season_matchday( $timings ) {
    $season = $timings->timings[0]->matches[0]->competition_id;
    $matchday = $timings->timings[0]->matches[0]->matchset_nr;
    return array( $season, $matchday );
}

function get_settings_feed() {
    global $settings_url, $feed_args;
    return get_feed( $settings_url, $feed_args );
}

function extract_teams( $settings ) {
    $teams = [];

    foreach( $settings->teamTranslation as $row ) {
        $team = [
            'team_id' => $row->id,
            'team_name' => $row->long,
            'team_name_short' => $row->short
        ];
        array_push( $teams, $team );
    }

    return $teams;
}

function get_scores_feed( $season, $matchday ) {
    global $scores_url, $feed_args;
    $feed_args['season'] = $season;
    $feed_args['matchday'] = $matchday;
    return get_feed( $scores_url, $feed_args );
}

function extract_matches( $timings ) {
    $matches = [];

    foreach( $timings->timings as $channel ) {
        $timings_match = $channel->matches[0];
        $match = [
            'match_id' => $timings_match->id,
			'tournament_id' => $timings_match->competition_id,
			'round' => $timings_match->matchset_nr,
			'home_team_id' => $timings_match->home_team_id,
			'away_team_id' => $timings_match->away_team_id
        ];
        array_push( $matches, $match );
    }

    return $matches;
}

function get_events_feed( $season, $matchday ) {
    global $events_url, $feed_args;
    $feed_args['season'] = $season;
    $feed_args['matchday'] = $matchday;
    return get_feed( $events_url, $feed_args );
}

function extract_events( $events_data ) {
    global $event_type_ids, $event_type_names;

    $events = [];

    foreach( $events_data->data->events as $v ) {
        // only goals
        $event = [];
        if( isset( $event_type_names[$v->_typeid] ) ) {

            $event = [
                'event_id' => $v->_id,
                'event_type' => $event_type_names[$v->_typeid],
                'event_time' => $v->time,
                'match_id' => $v->matchid

            ];
            if( $v->_typeid == $event_type_ids['goal'] ) {
                $event['score_amount'] = 1;
                $event['score_team'] = $v->team;
            }
            array_push( $events, $event );
        }
    }
    return $events;
}

function extract_phase( $timings ) {
	return $timings->timings[0]->phase_name;
}

// ########################## MAIN ##########################

// poll feeds
$feed_data['settings'] = get_settings_feed();
$feed_data['timings'] = get_timings_feed();
list( $season, $matchday ) = extract_season_matchday( $feed_data['timings'] );
$feed_data['events'] = get_events_feed( $season, $matchday );

// construct results from feed data
$result = [
	'phase' => extract_phase( $feed_data['timings'] ),
    'teams' => extract_teams( $feed_data['settings'] ),
    'matches' => extract_matches( $feed_data['timings'] ),
    'events' => extract_events( $feed_data['events']  )
];

// output result
header( "Content-type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Origin *" );
print json_encode( $result );

