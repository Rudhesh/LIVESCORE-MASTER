import React, { useEffect, useState } from "react";
import axios from "axios";
import Events from "./components/events";

const App = (): JSX.Element => {
  // state for storing the match data, events, and teams
  const [match, setMatch] = useState([]);
  const [sportEvents, setSportEvents] = useState([]);
  const [teamsInfo, setTeamsInfo] = useState([]);

  // useEffect hook to fetch data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teams, events, matches] = await Promise.all([
          axios.get("http://localhost:4040/teams"),
          axios.get("http://localhost:4040/events"),
          axios.get("http://localhost:4040/matches"),
        ]);
        setTeamsInfo(teams.data);
        setSportEvents(events.data);
        setMatch(matches.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Events sportEvents={sportEvents} teamsInfo={teamsInfo} match={match} />
    </div>
  );
};

export default App;
