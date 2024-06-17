const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

router.get("/:id", read);

router.use("/", browse);

module.exports = router;
