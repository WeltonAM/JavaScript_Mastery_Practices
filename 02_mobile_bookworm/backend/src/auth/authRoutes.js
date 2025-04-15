import express from "express";
import { registerUser } from "./registerController.js";
import { loginUser } from "./loginController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
