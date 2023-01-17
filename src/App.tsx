import React, { useEffect, useState } from "react";
import axios from "axios";
import Events from "./components/events";

export default function App(): JSX.Element {
  // state for storing the match data, events, and teams
  const [match, setMatch] = useState([]);
  const [sportEvents, setSportEvents] = useState([]);
  const [teamsInfo, setTeamsInfo] = useState([]);

  // useEffect hook to fetch data when the component is mounted
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://vgcommonstaging.aitcloud.de/livescore/"
        );
        setSportEvents(response.data.events);
        setMatch(response.data.matches);
        setTeamsInfo(response.data.teams);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    // setInterval to call the function every 2 seconds
    let intervalId = setInterval(fetchData, 2000);
    // clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Events sportEvents={sportEvents} teamsInfo={teamsInfo} match={match} />
    </div>
  );
}
