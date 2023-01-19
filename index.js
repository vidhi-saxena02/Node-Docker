const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({
    hey: "vidhi",
  });
});
app.listen(PORT, () => {
  console.log(`Lisenting on PORT ${PORT}`);
});
