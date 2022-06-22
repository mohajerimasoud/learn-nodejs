import express from "express";
import {
  createUserController,
  getAllUsersController,
} from "../controllers/users.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsersController();
    res.status(200).json({ content: users });
  } catch (error) {
    res.status(500).json({ message: "internal server error " });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await createUserController(req.body);
    if (result.code === 200) {
      res
        .status(result.code)
        .json({ content: result.content, message: result.message });
    } else {
      console.log(result);
      res.status(result.code).json({ content: result });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
