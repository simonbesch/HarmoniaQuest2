const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programAction");

router.use("/", browse);

module.exports = router;
