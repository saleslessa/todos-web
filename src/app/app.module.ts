import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { TodoDetailComponent } from './todo/todo-detail.component';
import { TodosComponent } from './todo/todos.component';
import { TodoService } from './todo/todo.service';
import { CollapseModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoDetailComponent,
    TodosComponent
  ],
  providers: [ TodoService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
