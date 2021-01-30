const pool = require("../databasePool");
const TRAITS = require("../data/traits.json");

TRAITS.forEach(({ type, values }) => {
  const traitType = type;
  const traitValues = values;
  traitValues.forEach((traitValue) => {
    pool.query(
      `INSERT INTO trait("traitType", "traitValue")
            VALUES($1, $2) RETURNING id`,
      [traitType, traitValue],
      (error, response) => {
        if (error) return console.log(error);

        const traitId = response.rows[0].id;
        console.log(`Inserted trait - id: ${traitId}`);
      }
    );
  });
});
