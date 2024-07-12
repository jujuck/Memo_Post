// Import access to database tables
const mountainsModel = require("../models/mountains");

// The B of BREAD - Browse (Read All) operation

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

// The A of BREAD - Add (Create) operation
const add = async (req, res /** ,next */) => {
  // Extract the mountain data from the request body
  /** One Piece of Puzzle */

  /** One Piece of Puzzle, don't forget to delete the line below and to uncomment next */
  res.sendStatus(201);
};

// Ready to export the controller functions
module.exports = {
  browse,
  add,
};
