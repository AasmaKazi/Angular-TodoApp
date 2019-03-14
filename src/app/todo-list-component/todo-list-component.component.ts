
import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {

  todos: Todo[];
  newTodo: Todo = new Todo();
  // editing: boolean = false;
  editingTodo: Todo = new Todo();

  constructor() { }

  ngOnInit(): void {
  this.getTodos();
  }
getTodos() {


}
createTodo(todoForm: NgForm): void {

}
deleteTodo(id: string): void {

}

updateTodo(todoData: Todo): void {

}
toggleCompleted(todoData: Todo): void {

}

editTodo(todoData: Todo): void {


}

clrearEditing(): void {

}
}
