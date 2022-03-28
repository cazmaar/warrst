import db from "../db/connection.js";

// Get all spaces from warrantys table
export const getAllStudents = async () => {
  const res = await db.query(`SELECT * FROM students`);
  return res.rows;
};

//Get all spaces by id
export const getAllStudentsById = async (id) => {
  const res = await db.query(`SELECT * FROM students where id=$1`,[id] );
  return res.rows;
};


// post to  warranty
export const postStudents = async (name, address, phone, decsription) => {
  const res = await db.query(
    `INSERT INTO  students (name, address, phone, decsription) VALUES($1,$2,$3,$4) RETURNING *`,
    [name, address, phone, decsription]
  );
  return res.rows;
};

