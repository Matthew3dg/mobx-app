import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todosObj from '../store/todos';
import { ITodo } from '../types/types';

const AddTodoForm = () => {
  const todoTemplate: ITodo = {
    userId: 1,
    id: todosObj.myTodos.length,
    title: '',
    completed: false,
  };

  const [newTodoObj, setNewTodoObj] = useState<ITodo>(todoTemplate);

  const addTodo = (todo: ITodo) => {
    todosObj.addTodo(todo);
    setNewTodoObj({ ...newTodoObj, title: '' });
  };

  return (
    <div>
      <label htmlFor="title">Текст задачи </label>
      <input
        onChange={(e) => setNewTodoObj({ ...newTodoObj, title: e.target.value })}
        type="text"
        name="title"
        id="title"
        value={newTodoObj.title}
      />
      <button onClick={() => addTodo(newTodoObj)}>Добавить</button>
      <button onClick={() => setNewTodoObj({ ...newTodoObj, title: '' })}>Очистить</button>
    </div>
  );
};

export default observer(AddTodoForm);
