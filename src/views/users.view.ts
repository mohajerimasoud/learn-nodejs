import express from "express";
import {
  createUserController,
  deleteSingleUserController,
  getAllUsersController,
  getSingleUserController,
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

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    try {
      const users = await getSingleUserController(+userId);
      res.status(200).json({ content: users });
    } catch (error) {
      res.status(500).json({ message: "internal server error " });
    }
  } else {
    res.status(404).json({ message: "user dosnt exist " });
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

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    try {
      const users = await deleteSingleUserController(+userId);
      res.status(200).json({ content: users });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(404).json({ message: "user dosnt exist " });
  }
});

export default router;
