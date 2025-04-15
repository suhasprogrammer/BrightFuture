const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoute = require("./route/taskRoute");

require("dotenv").config();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/app", taskRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is Running on", PORT);
});
