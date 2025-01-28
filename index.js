const express = require("express");
const cors = require("cors")

require("dotenv").config();

const middlewares = require("./middleware");

const app = express();
app.use(cors());

// body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App runnung on port ${port}`);
});

// server.listen


app.get("/api/v1/user", (req, res) => {
const email = req.body.email ? req.body.email : "email@gmail.com" ; 
const date = new Date().toISOString();

  res.status(200).json({
        "email": email,
        "current_datetime": date,
        "github_url": "<https://github.com/yourusername/your-repo>"
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
