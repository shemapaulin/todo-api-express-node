import express from "express";
import dotenv from "dotenv";
import { todos } from "./routes/task.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.use('/api', todos);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
