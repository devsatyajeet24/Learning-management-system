const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createCourse, getCourses } = require("../controllers/courseController");

router.post("/", auth, role("instructor"), createCourse);
router.get("/", auth, getCourses);

module.exports = router;
