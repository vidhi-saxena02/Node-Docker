const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({
    hey: "vidhi how are u!!",
  });
});
app.listen(PORT, () => {
  console.log(`Lisenting on PORT ${PORT}`);
});
