import express from "express";
import cors from "cors";
import apiRouter from "./apiRouter/index.js";

const app = express();
const PORT = 8080;

app.use(cors()); // CORSの許可

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
