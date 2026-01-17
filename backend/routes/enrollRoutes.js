const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Enrollment = require("../models/Enrollment");

router.post("/:courseId", auth, async (req, res) => {
  await Enrollment.create({
    student: req.user.id,
    course: req.params.courseId
  });
  res.json({ msg: "Enrolled Successfully" });
});

router.get("/my", auth, async (req, res) => {
  const data = await Enrollment.find({ student: req.user.id }).populate("course");
  res.json(data);
});

module.exports = router;
