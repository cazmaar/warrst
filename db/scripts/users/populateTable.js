import db from "../../connection.js";
import studentData from "../../../Data/index.js";

studentData.forEach(async (item)=>{
const response = await db.query(
  ` INSERT INTO students (name, address, phone, description) VALUES($1,$2,$3,$4)`,[item.name,item.address, item.phone,item.description]
);

console.log(response);
})


db.end();
