import { Component, OnInit } from '@angular/core';

import { Todo } from './todo/todo';
import {Item} from './todo/item';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoService.getTodos().then(t => this.todos = t.slice(0, 3));
    }
 }
