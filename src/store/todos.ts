import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/types';

class Todos {
  myTodos: ITodo[] = [
    {
      userId: '1',
      id: '-1',
      title: 'Повторить mobX',
      completed: true,
    },
    {
      userId: '1',
      id: '-2',
      title: 'Повторить Redux',
      completed: false,
    },
    {
      userId: '2',
      id: '-3',
      title: 'Углубиться в TS',
      completed: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo | ITodo[]) {
    if (Array.isArray(todo)) {
      this.myTodos.unshift(...todo);
    } else {
      this.myTodos.unshift(todo);
    }
  }

  removeTodo(id: string) {
    this.myTodos = this.myTodos.filter((todosItem) => {
      return todosItem.id !== id;
    });
  }
  changeTodoStatus(index: number) {
    const currentTodo = this.myTodos[index];
    this.myTodos[index] = { ...currentTodo, completed: !currentTodo.completed };
  }

  async fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Ошибка запроса');
      }
      const data = await response.json();
      this.addTodo(data);
    } catch (error) {
      alert(error);
    }
  }
}

export default new Todos();
