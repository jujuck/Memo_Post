const client = require("../../database/client");

const readAll = async () => {
  // Execute the SQL SELECT query to retrieve all cars from the "car" table
  const [mountains] = await client.query(
    `select m.id, m.title, m.subtitle, a.name, a.birthday, m.summary from mountain as m inner join author as a on a.id = m.author_id`
  );

  // Return the array of cars
  return mountains;
};

// The C of CRUD - Create operation
/** One Piece of Puzzle, don't forget to uncomment le line 17 */

module.exports = { readAll /* create */ };
