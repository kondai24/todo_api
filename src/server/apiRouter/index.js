import express from "express";
import tasksRouter from "./tasks.js";

const apiRouter = express.Router();

apiRouter.use("/tasks", tasksRouter);

export default apiRouter;
