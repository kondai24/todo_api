import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  updateTask,
} from "../../controller/tasksController.js";

// /api/v1/tasks
const tasksRouter = express.Router();

//GET all
tasksRouter.get("", getAllTask);

// GET one by id
tasksRouter.get("/:id", getTaskById);

// POST task
tasksRouter.post("/", createTask);

// PUT task
tasksRouter.put("/:id", updateTask);

// DELETE task
tasksRouter.delete("/:id", deleteTask);

export default tasksRouter;
