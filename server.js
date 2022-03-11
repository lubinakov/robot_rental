const express = require("express");
const path = require("path");
const { PORT = 3000 } = process.env;
const app = new express();

app.use("/", express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
  console.log("listing on port %s", PORT);
});
