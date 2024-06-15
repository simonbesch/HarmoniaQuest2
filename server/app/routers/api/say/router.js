const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { test } = require("../../../controllers/sayAction");

// Route to get a list of items
router.get("/", test);

/* ************************************************************************* */

module.exports = router;
