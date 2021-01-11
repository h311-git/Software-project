const express = require("express");
const client = require("./database/dbConnect");
const dotenv = require("dotenv");
const chalk = require("chalk");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const router = require("./routers/index.js");
const courseRouter = require("./routers/course");
const path = require("path");
const quizRouter = require("./routers/quiz");
dotenv.config({ path: "./config/config.env" });

const app = express();

const Port = process.env.PORT;

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.use("/courses", courseRouter);
app.use("/quiz", quizRouter);
(async () => {
  try {
    if (await client.initDb()) {
      console.log(chalk.green("connection to the database established!"));
      app.listen(Port, () => {
        console.log(chalk.green("Server is up on port " + Port));
      });
    } else {
      throw Error("error due to connection to the database ");
    }
  } catch (error) {
    console.log(error);
  }
})();
