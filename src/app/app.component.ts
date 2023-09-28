import { Component } from '@angular/core';
import { TodoService } from './todos/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todos = this.todoService.todos

  constructor(private todoService: TodoService) { }
}
