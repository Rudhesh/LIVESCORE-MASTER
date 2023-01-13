const express = require("express");
const app = express();
const cors = require("cors");
const { selectEvents, selectTeams, selectMatches } = require("./events");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/teams", async (req, res) => {
  try {
    const teams = await selectTeams();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/events", async (req, res) => {
  try {
    const events = await selectEvents();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/matches", async (req, res) => {
  try {
    const matches = await selectMatches();
    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4040, () => {
  console.log("Server started on port 4040");
});
