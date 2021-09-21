const express = require("express");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
