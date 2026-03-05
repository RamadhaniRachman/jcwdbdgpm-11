import type { Request, Response } from "express";
import { readTodos, writeTodos } from "../helpers/file.helper.js";
import type { Todo } from "../types/todo.type.js";

// GET ALL
export const getAllTodos = (req: Request, res: Response) => {
  try {
    const { category, search, page = "1", limit = "5" } = req.query;
    const currentPage = Number(page);
    const perPage = Number(limit);

    if (isNaN(currentPage) || isNaN(perPage)) {
      return res.status(400).send({
        message: "Invalid pagination params",
      });
    }

    let todos = readTodos().filter((todo: Todo) => !todo.deletedAt);

    // ------- filter by category
    if (category && typeof category === "string") {
      todos = todos.filter(
        (todo: Todo) => todo.category.toLowerCase() === category.toLowerCase(),
      );
    }

    // -------- search by title or description
    if (search && typeof search === "string") {
      const keyword = search.toLowerCase();

      todos = todos.filter(
        (todo: Todo) =>
          todo.title.toLowerCase().includes(keyword) ||
          todo.description.toLowerCase().includes(keyword),
      );
    }

    // -------- pagination
    const totalData = todos.length;
    const totalPages = Math.ceil(totalData / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    const paginatedData = todos.slice(startIndex, endIndex);

    res.status(200).send({
      success: true,
      meta: {
        totalData,
        totalPages,
        currentPage,
        perPage,
      },
      data: paginatedData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET BY ID
export const getTodoById = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todos = readTodos();
    const todo = todos.find((t) => t.id === id && !t.deletedAt);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE
export const createTodo = (req: Request, res: Response) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const todos = readTodos();

    const lastTodo = todos[todos.length - 1];

    const newTodo: Todo = {
      id: lastTodo ? lastTodo.id + 1 : 1,
      title,
      description,
      category,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      deletedAt: null,
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE
export const updateTodo = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todos = readTodos();
    const index = todos.findIndex((t) => t.id === id && !t.deletedAt);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const { title, description, category, isCompleted } = req.body;

    const todo = todos[index];

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const updatedTodo: Todo = {
      id: todo.id,
      title: title ?? todo.title,
      description: description ?? todo.description,
      category: category ?? todo.category,
      isCompleted: isCompleted ?? todo.isCompleted,
      createdAt: todo.createdAt,
      updatedAt: new Date().toISOString(),
      deletedAt: todo.deletedAt,
    };

    todos[index] = updatedTodo;
    writeTodos(todos);

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE (Soft Delete)
export const deleteTodo = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const todos = readTodos();
    const index = todos.findIndex((t) => t.id === id && !t.deletedAt);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const todo = todos[index];

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.deletedAt = new Date().toISOString();
    writeTodos(todos);
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
