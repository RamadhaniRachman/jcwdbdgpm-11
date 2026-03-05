import { Router } from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;

// filter + search
// searching -> http://localhost:8000/api/todos?search=masteringprogramming
// filtering -> http://localhost:8000/api/todos?category=programming
// combine -> http://localhost:8000/api/todos?search=mastering&category=programming
