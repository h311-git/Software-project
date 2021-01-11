const express = require("express");
const { getDb } = require("../database/dbConnect");
const ObjectID = require("mongodb").ObjectID;
const router = express.Router();

router.get("/:id", async (req, res) => {
  const courseInfo = await getDb()
    .db("learning-management")
    .collection("course")
    .findOne({ _id: new ObjectID(req.params.id) });
  res.render("courses", courseInfo);
});

module.exports = router;
