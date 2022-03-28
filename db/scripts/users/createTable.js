import db from "../../connection.js";

const response =  await db.query(
  `CREATE TABLE IF NOT EXISTS students (id SERIAL PRIMARY KEY, name TEXT, address TEXT, phone TEXT, description TEXT);`
);

console.log(response);

db.end();
