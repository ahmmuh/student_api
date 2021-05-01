const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const studentRoute = require("./routes/studentRoute");

require("dotenv/config");

app.use("/students", studentRoute);

app.get("/", (req, res) => {
  res.send("welcome to student API");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected");
  }
);

app.listen(5000);
