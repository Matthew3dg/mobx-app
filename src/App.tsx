import React from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import MyTodos from './components/MyTodos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Создавайте задачи для продуктивной работы</h1>
        <AddTodoForm />
        <h2>Ваши задачи</h2>
        <MyTodos />
      </header>
    </div>
  );
}

export default App;
