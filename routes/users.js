import express from "express";

import {
  getAllStudents,
  getAllStudentsById,
  postStudents,
} from "../models/users.js";

const router = express.Router();

//  Get all receipts
router.get("/", async (req, res) => {
  const students = await getAllStudents();
  res.json({
    success: true,
    payload: students,
  });
});

// get receipt by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const students = await getAllStudentsById(Number(id));
  res.json({
    success: true,
    payload: students,
  });
});

//post receipt
router.post("/", async (req, res) => {
  const { name, address, phone, description } = req.body;
  console.log(req.body)

  const students = await postStudents(name, address, phone, description);
  res.json({
    success: true,
    payload: students,
  });
});

//delete post
// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const warranty = await deletePost(Number(id));
//   res.json({
//     success: true,
//     payload: warranty,
//   });
// });

export default router;
