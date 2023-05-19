"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.ceil(Math.random() * 10).toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'New task created', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const id = req.params.id;
    const updatedTodoText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("Could not find todo with given id");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedTodoText);
    res.status(201).json({ message: "Updated todo", updatedTodo: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("Could not find todo with given id");
    }
    TODOS.splice(todoIndex, 1);
    res.status(201).json({ message: "Delete todo" });
};
exports.deleteTodo = deleteTodo;
