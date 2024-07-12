const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import montains module for handling item-related operations
const mountains = require("./controllers/mountains");

// Route to get a list of montains
router.get("/mountains", mountains.browse);

/** One Piece of Puzzle */
/* ************************************************************************* */
/** One Piece of puzzle */

module.exports = router;
