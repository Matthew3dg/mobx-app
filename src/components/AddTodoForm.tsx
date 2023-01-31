import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todosObj from '../store/todos';
import { ITodo } from '../types/types';
import { uid } from 'uid';

const AddTodoForm = () => {
  const todoTemplate: ITodo = {
    userId: '1',
    id: '',
    title: '',
    completed: false,
  };

  const [newTodoObj, setNewTodoObj] = useState<ITodo>(todoTemplate);

  const addTodo = (todo: ITodo) => {
    if (todo.title.length > 0) {
      todosObj.addTodo(todo);
      setNewTodoObj({ ...newTodoObj, title: '' });
    } else {
      alert('Введите заголовок задачи');
    }
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
      <button onClick={() => addTodo({ ...newTodoObj, id: uid() })}>Добавить</button>
      <button onClick={() => setNewTodoObj({ ...newTodoObj, title: '' })}>Очистить</button>
    </div>
  );
};

export default observer(AddTodoForm);
