const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rudesh",
  database: "matches",
  port: 3306,
});

// const events = [

//   {
//     event_id: 19,
//     event_type: "match_halftime",
//     event_time: 45,
//     match_id: 217605650,
//     score_amount: null,
//     score_team: null,
//   },
//   {
//     event_id: 20,
//     event_type: "goal",
//     event_time: 10,
//     match_id: 217605638,
//     score_amount: 1,
//     score_team: "home",
//   },
// ];

// connection.connect();

// const sql =
//   "INSERT INTO events (event_id, event_type, event_time,match_id,score_amount,score_team) VALUES (?, ?, ?,?,?,?)";
// const inserts = events.map((event) => [
//   event.event_id,
//   event.event_type,
//   event.event_time,
//   event.match_id,
//   event.score_amount,
//   event.score_team,
// ]);

// inserts.forEach((data) => {
//   connection.execute(sql, data, (error, results) => {
//     if (error) throw error;
//     console.log(`Inserted ${results.affectedRows} row(s)`);
//   });
// });

connection.connect();

module.exports = connection;
