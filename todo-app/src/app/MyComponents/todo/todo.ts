import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItem} from '../todo-item/todo-item'
import { AddTodo } from '../add-todo/add-todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,TodoItem,AddTodo],
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss']
})
export class Todo {
 todos: { sno: number; title: string; desc: string; active: boolean }[];

    constructor(){
      if (typeof window !== 'undefined' && localStorage) {
      const localItem = localStorage.getItem('todos');
      this.todos = localItem ? JSON.parse(localItem) : [];
    } else {
      this.todos = [];
    }
    }
    deleteTodo(todo:{ sno: number; title: string; desc: string; active: boolean }){
      console.log(todo)
      const index=this.todos.indexOf(todo);
      if (index > -1) {
      this.todos.splice(index,1)
      localStorage.setItem("todos",JSON.stringify(this.todos))
      }
    }
    addTodo(todo:{ sno: number; title: string; desc: string; active: boolean }){
      console.log(todo)
      this.todos.push(todo)
      localStorage.setItem("todos",JSON.stringify(this.todos))
    }
}
