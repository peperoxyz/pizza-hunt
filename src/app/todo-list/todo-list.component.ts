import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  // State
  todos: string[] = [];
  todoText = '';

  ngOnInit(): void {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
    console.log(this.todos);
  }

  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todoText = '';
  }

  removeTodo(index: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
