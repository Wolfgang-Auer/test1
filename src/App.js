import React from 'react';
// Import wieder aktivieren:
import TodoList from './TodoList';
import './App.css'; // Kann bleiben, auch wenn leer

function App() {
  return (
    <div className="App">
      {/* "Test Inhalt" entfernen und TodoList wieder einfügen: */}
      <TodoList />
    </div>
  );
}

export default App; 