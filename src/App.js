import './App.css';

import React, { useState } from 'react';
import Header from './components/Header'
import TodoItems from './components/TodoItems'
import TodoControls from './components/TodoControls'

function App() {

  const [items, setItems] = useState([]);

  function addTodoItem(item) {
    setItems(prev => [...prev, item]);
  }

  function toggleComplete(todoIndex) {
    setItems(items.map((item, i) => {
        return i === todoIndex ? { ...item, complete: !item.complete } : item;
      }
    ));
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoItems items={items} toggleComplete={toggleComplete}/>
        <TodoControls addTodoItem={addTodoItem} />
      </div>
    </div>
  );
}

export default App;
