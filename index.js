const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();

mongoose
  .connect("mongodb://admin:password@172.25.0.2:27017/?authSource=admin")
  .then(() => console.log("sucessfully connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.json({
    hey: "vidhi how are u!!",
  });
});
app.listen(PORT, () => {
  console.log(`Lisenting on PORT ${PORT}`);
});
