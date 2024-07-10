// Import access to database tables
const mountainsModel = require("../models/mountains");

// The B of BREAD - Browse (Read All) operation
/** One Piece of Puzzle, don't forget to uncomment line 2 and 9 */
const browse = async (req, res, next) => {
  try {
    // Fetch all montains from the database
    const mountains = await mountainsModel.readAll();

    // Respond with the montains in JSON format
    res.status(200).json(mountains);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
};
