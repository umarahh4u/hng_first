const express = require("express");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middleware");

const app = express();
app.use(cors());

// body parser
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App runnung on port ${port}`);
});

// server.listen
app.get("/user", (req, res) => {
  const email = req.query.email || "email@gmail.com";
  const date = new Date().toISOString().split(".")[0] + "Z";

  res.status(200).json({
    email: email,
    current_datetime: date,
    github_url: "https://github.com/umarahh4u/hng_first",
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.export = app;
