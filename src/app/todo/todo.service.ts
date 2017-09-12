import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';
import {Item} from './item';

@Injectable()
export class TodoService {
    private TODO_API_URL = 'http://localhost:3000/todos/';

    constructor(private http: Http) {}

    getTodos(): Promise<Todo[]> {

        return this.http.get(this.TODO_API_URL).toPromise()
            .then(resp => resp.json())
            .catch(err => Promise.reject(err));

    }

    postTodo(todo: Todo): void {
        console.log(todo);
        this.http.post(this.TODO_API_URL, todo).toPromise()
            .then(t => console.log('Success: ' + t.status + ' - ' + t.statusText))
            .catch(err => console.log('fail: ' + err.message));
    }

    putTodo(todo: Todo): void {
        const url = this.TODO_API_URL + todo._id.$oid;

        this.http.put(url, todo).toPromise()
            .then(t => console.log('Success: ' + t.status + ' - ' + t.statusText))
            .catch(err => console.log('fail: ' + err.message));
    }

    deleteTodo(id: string): void {
        const url = this.TODO_API_URL + id;

        this.http.delete(url).toPromise()
            .then(t => console.log('Success: ' + t.status + ' - ' + t.statusText))
            .catch(err => console.log('fail: ' + err.message));
    }

    getTodo(id: string): Promise<Todo> {
        const url = this.TODO_API_URL + id;
        return this.http.get(url).toPromise()
        .then(resp => resp.json())
        .catch(err => {
            const errMsg = (err.message) ? err.message : err.status
             ? `${err.status}: ${err.statusText}` : 'Server error';

             console.error('console: ' + errMsg);
             return Promise.reject(errMsg);
        });
    }
}
