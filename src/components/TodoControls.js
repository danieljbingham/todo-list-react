import "./TodoControls.css";
import React, { useState } from 'react';

function TodoControls(props) {

    const [text, setText] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function addTodo(e) {
        e.preventDefault();
        props.addTodoItem({ text, complete: false });
        setText("");
    }

    return (
        <form className="TodoControls" onSubmit={addTodo}>
            <input type="text" value={text} onChange={handleTextChange}></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoControls;
