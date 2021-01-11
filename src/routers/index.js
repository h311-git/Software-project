const express = require("express");
const router = express.Router();
const { getDb } = require("../database/dbConnect");
router.get("/", async (req, res) => {
  const course = await getDb()
    .db("learning-management")
    .collection("course")
    .findOne({});
  res.render("home", course);
});

router.get("/dashboard", (req, res) => {
  res.redirect("/");
});
module.exports = router;
