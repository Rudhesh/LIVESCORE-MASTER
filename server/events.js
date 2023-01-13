const connection = require("./database");

async function selectTeams() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM teams", function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

async function selectMatches() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM matches", function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

async function selectEvents() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM events", function (err, rows, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = {
  selectTeams,
  selectEvents,
  selectMatches,
};
