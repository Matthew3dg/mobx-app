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

  addTodo(todo: ITodo) {
    this.myTodos.push(todo);
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

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => (this.myTodos = this.myTodos.concat(json)));
  }
}

export default new Todos();
