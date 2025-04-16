import express from "express";
import { registerBook } from "./registerBookController.js";
import userMiddleware from "../middlewares/user.middleware.js"
import { fetchBooks } from "./fetchBooksController.js";
import { deleteBook } from "./deleteBookController.js";
import { userBooks } from "./userBooksController.js";

const router = express.Router();

router.post("/", userMiddleware, registerBook);
router.get("/", userMiddleware, fetchBooks);
router.get("/user", userMiddleware, userBooks);
router.delete("/:id", userMiddleware, deleteBook);

export default router;
