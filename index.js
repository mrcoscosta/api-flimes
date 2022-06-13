const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
const filmes = require("./models/filmes2.json");

app.use(express.json());

app.get("/filmes", (req, res) => {
  try {
    res.json(filmes);
  } catch (error) {
    return res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`express start at http://localhost:${port}`);
});
