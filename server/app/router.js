const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import montains module for handling item-related operations
/** One Piece of puzzle */
const mountains = require("./controllers/mountains");

// Route to get a list of montains
router.get("/mountains", mountains.browse);
/* ************************************************************************* */

module.exports = router;
