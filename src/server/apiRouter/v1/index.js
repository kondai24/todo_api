import express from "express";
import tasksRouter from "./tasks.js";

const v1Router = express.Router();

v1Router.use("/tasks", tasksRouter);

export default v1Router;
