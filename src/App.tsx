import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewToDo";
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
  }

  return (
    <>
      <div className="App">
        <NewToDo onAddTodo={todoAddHandler} />
        <TodoList list={todos} />
      </div>
    </>
  );
}

export default App;
