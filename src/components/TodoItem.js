import './TodoItem.css';
import React, { useState } from 'react';

function TodoItem(props) {

    let cls = "TodoItem" + (props.complete ? " complete" : "");

    return (
        <div className={cls} style={{ textDecoration: props.complete ? "line-through" : "" }} onClick={() => props.toggleComplete(props.i)}>
            {props.text}
            <div className="remove" onClick={(e) => {props.removeTodo(props.i); e.stopPropagation();}}>✖</div>
        </div>
    );
}

export default TodoItem;
