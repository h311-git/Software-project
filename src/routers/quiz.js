const express = require("express");
const client = require("../database/dbConnect");
const router = express.Router();

router.get("/", async (req, res) => {
  const quizInfo = await client
    .getDb()
    .db("learning-management")
    .collection("exam")
    .findOne({});
  const quizTime = new Date(quizInfo.time).getTime();
  if (quizTime < Date.now()) {
    res.render("quiz", { layout: "quiz" });
  } else {
    res.status(400).send();
  }
  //res.render("quiz", { layout: "quiz" });
});

module.exports = router;
