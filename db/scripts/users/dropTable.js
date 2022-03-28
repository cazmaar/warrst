import db from "../../connection.js";

const response = await db.query(
  `DROP TABLE students`
);

console.log(response);

db.end();
