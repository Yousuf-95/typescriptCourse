import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewToDo: React.FC<NewTodoProps> = (props) => {
    let textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo-text">Todo Text</label>
                    <input type="text" id="todo=text" ref={textInputRef} />
                </div>
                <button type="submit">ADD TODO</button>
            </form>
        </>
    );
};


export default NewToDo;