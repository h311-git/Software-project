const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("quiz", { layout: "quiz" });
});

module.exports = router;
