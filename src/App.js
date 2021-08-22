import './App.css';

import React, { useState } from 'react';
import Header from './components/Header'
import TodoItems from './components/TodoItems'
import TodoControls from './components/TodoControls'

function App() {

  const [items, setItems] = useState([]);
  console.log(items);

  function addTodoItem(item) {
    setItems(prev => [...prev, item]);
  }

  function toggleComplete(todoIndex) {
    setItems(items.map((item, i) => {
        return i === todoIndex ? { ...item, complete: !item.complete } : item;
      }
    ));
  }

  function removeTodo(todoIndex) {
    let filtered = items.filter((_item, i) => i !== todoIndex);
    console.log(filtered)
    setItems(filtered);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoItems items={items} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
        <TodoControls addTodoItem={addTodoItem} />
      </div>
    </div>
  );

  // note: functional stateless component
  // const Greeting = props => <h1>{props.greeting}</h1>;

}

export default App;
