const express = require("express");
const app = express();
const dbmusicRoute = require("./dbmusic/routes");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/music", cors(), dbmusicRoute);

app.listen(port, () => {
  console.log("Express API running in port: " + port);
});
