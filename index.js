const express = require("express");
const path = require("path");
const dir = path.resolve();
const staticFile = path.join(dir, "public");

const app = express();
app.use(express.static(staticFile));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticFile, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`This app run at http://localhost:${process.env.PORT || 3000}`);
});
