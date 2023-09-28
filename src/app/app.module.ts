import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { GetTodoComponent } from './get-todo/get-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todos/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    GetTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
