const express = require("express");
const maanController = require("../controllers/maan");

const router = express.Router();

router.get("/", maanController.getMaan);
router.post("/post", maanController.postMaan);

module.exports = router;

