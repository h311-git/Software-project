const express = require("express");
const { getDb } = require("../database/dbConnect");
const date = require("date-fns");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const courseInfo = await getDb()
    .db("learning-management")
    .collection("exam")
    .aggregate([
      {
        $lookup: {
          from: "course",
          localField: "course",
          foreignField: "_id",
          as: "course",
        },
      },
    ])
    .toArray();
  courseInfo[0].time = date.format(courseInfo[0].time, "yyyy-MM-dd HH:mm:ss");
  res.render("courses", {
    ...courseInfo[0],
    now: Date.now(),
    quizTime: new Date(courseInfo[0].time).getTime(),
  });
});

module.exports = router;
