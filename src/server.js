const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    app: "NimbusBeacon",
    message: "DevOps app is running",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "nimbusbeacon",
    timestamp: new Date().toISOString()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`NimbusBeacon running on port ${port}`);
  });
}

module.exports = app;
