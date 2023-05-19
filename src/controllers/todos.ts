import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.ceil(Math.random() * 10).toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({message: 'New task created', createdTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
}

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const id = req.params.id;
    const updatedTodoText = (req.body as {text: string}).text;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if(todoIndex < 0) {
        throw new Error("Could not find todo with given id");
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedTodoText);

    res.status(201).json({message: "Updated todo", updatedTodo: TODOS[todoIndex]});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const id = req.params.id;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if(todoIndex < 0) {
        throw new Error("Could not find todo with given id");
    }

    TODOS.splice(todoIndex, 1);

    res.status(201).json({message: "Delete todo"});
}