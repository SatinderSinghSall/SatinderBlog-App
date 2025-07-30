const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App Server & APIs are LIVE 🚀");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
