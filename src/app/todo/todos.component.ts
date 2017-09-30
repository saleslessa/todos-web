import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../services/message.service';
import { Todo } from './todo';
import {Item} from './item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;

  getTodos(): void {
    this.todoService.getTodos()
      .then(t => this.todos = t)
      .catch(t => console.log(this.messageService.sendMessage('danger', t)));
  }

  ngOnInit(): void {
    this.getTodos();
  }

  constructor(
    private todoService: TodoService,
    private router: Router,
    private messageService: MessageService
  ) {}

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  gotoDetail(): void {
    this.router.navigate(['/todo.detail', this.selectedTodo._id.$oid]);
  }

  removeTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo._id.$oid);
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
