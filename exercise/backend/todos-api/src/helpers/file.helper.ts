import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Todo } from "../types/todo.type.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "..", "data", "todos.json");

export const readTodos = (): Todo[] => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read data file");
  }
};

export const writeTodos = (todo: Todo[]): void => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(todo, null, 2));
  } catch (error) {
    throw new Error("Failed to write data file");
  }
};
