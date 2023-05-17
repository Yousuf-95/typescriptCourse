import React from 'react';
import './TodoList.css';

interface TodoListProps {
    list: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return <ul>
        {props.list.map(todo =>
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
            </li>)
        }
    </ul>
}

export default TodoList;