import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import todos from '../store/todos';
import todosObj from '../store/todos';

const MyTodos = () => {
  useEffect(() => {
    todosObj.fetchTodos();
  }, []);

  const changeTodoStatus = (index: number) => todosObj.changeTodoStatus(index);
  const deleteTodo = (todoId: string) => todosObj.removeTodo(todoId);
  return (
    <div>
      {todos.myTodos.map((t, i) => {
        return (
          <div key={t.id}>
            <input type="checkbox" onChange={() => changeTodoStatus(i)} checked={t.completed} />
            <span>{t.title} </span>
            <button onClick={() => deleteTodo(t.id)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
};

export default observer(MyTodos);
