import express from "express";
import {
  getUSers,
  getUSerById,
  createUSer,
  updateUSer,
  deleteUSer,
} from "../controllers/USers.js";

const router = express.Router();
router.get("/users", getUSers);
router.get("/users/:id", getUSerById);
router.post("/users", createUSer);
router.patch("/users/:id", updateUSer);
router.delete("/users/:id", deleteUSer);

export default router;
