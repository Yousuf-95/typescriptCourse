import React from 'react';

interface TodoListProps {
    list: {id: string, text: string}[];
}


const TodoList: React.FC<TodoListProps> = (props) => {
    return <ul>
        {props.list.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
}

export default TodoList;