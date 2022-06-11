const express = require("express");
const app = express();
const filmes = require("./models/filmes2.json");

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json(filmes);
  } catch (error) {
    return res.send(error.message);
  }
});

app.listen(3222, () => {
  console.log(`express start at http://localhost:8080`);
});
