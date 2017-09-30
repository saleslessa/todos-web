import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Todo } from './todo';
import { Item } from './item';
import { TodoService } from './todo.service';


@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {
    @Input() todo: Todo;

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            const id = params['id'];

            (id && id !== '' && id !== 'indefined')
                ? this.todoService.getTodo(id).then(t => this.todo = t)
                : this.todo = new Todo();

          });

      }

    onUpdate(todo: Todo): void {
        (todo._id)
            ? this.todoService.putTodo(todo)
            : this.todoService.postTodo(todo);
            // console.log(todo);
    }

    addItem(): void {
        const newItem = new Item();

        if (!this.todo.items) {
            this.todo.items = new Array<Item>();
        }

        this.todo.items.push(newItem);
    }

    removeItem(item: Item): void {
        this.todo.items.splice(this.todo.items.indexOf(item), 1);
    }

    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
}
