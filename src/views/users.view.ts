import express from "express";
import { getAllUsersController } from "../controllers/users.controller";

const router = express.Router();

router.get("/all", async (req, res) => {
  // res.status(201).send('page-1')
  try {
    const users = await getAllUsersController();
    res.status(200).json({ content: users });
  } catch (error) {
    res.status(500).json({ message: "internal server error " });
  }
});

export default router;
