import express from "express";
import todoRouter from "./routers/todo.router.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
