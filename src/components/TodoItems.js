
import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoItems(props) {

    console.log(props.items);
    let items = props.items.map((item, i) => <TodoItem text={item.text} complete={item.complete} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo} i={i}/>)
    console.log(items)
    return (
        <div className="TodoItems">
            {items}
        </div>
    );
}

export default TodoItems;
