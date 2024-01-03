const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("https://omegleapp.me");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
