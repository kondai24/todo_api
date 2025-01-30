import express from "express";
import cors from "cors";
import apiRouter from "./apiRouter/index.js";

const app = express();
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
