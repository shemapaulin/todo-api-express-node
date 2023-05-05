import { Router } from "express";
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks
} from "../controllers/taskController.js";
const router = Router();

// create task
router.post("/todo", createTask);

// fetch all tasks
router.get("/todo", getTasks);

// get single task
router.get("/todo/:id", getTask);

// update single task
router.put("/todo/:id", updateTask);

// delete single task
router.delete("/todo/:id", deleteTask);

// delete all tasks
router.delete("/todo", deleteAllTasks);

export const todos = router;