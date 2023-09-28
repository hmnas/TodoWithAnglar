import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  editIndex: number | null = null;
  active = true;
  yourTodo = '';
  count = 0
  // localItem: string
  constructor(private todoService: TodoService) {
    // this.localItem = localStorage.getItem('todo') ?? '';
    // if (this.localItem) {
    //   console.log(this.localItem);
    //   this.todoService.todos = JSON.parse(this.localItem);
    //   console.log(this.todoService.todos)
    // }
  }



  todos = this.todoService.todos;

  addTodo() {
    const newTodo: Todo = { desc: this.yourTodo, active: true, edited: false };

    if (this.editIndex !== null) {
      this.todoService.edit(this.editIndex, newTodo);
      console.log(this.editIndex)
      this.editIndex = null;
    } else {
      if (this.count >= 0) {
        this.count++
      }
      this.todoService.add(newTodo);
    }

    this.yourTodo = '';
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  deleteTodo(todo: Todo) {
    if (this.count > 0 && todo.active) {
      this.count--
    }
    if (!todo.active) {
      this.count = this.count
    }
    this.todoService.delete(todo)
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }

  checkToggle(todo: Todo) {
    todo.active = !todo.active;
    if (this.count > 0 && !todo.active) {
      this.count--
    } else {
      this.count++
    }
  }

  editTodo(index: number) {
    this.editIndex = index;
    this.yourTodo = this.todos[index].desc;
    console.log(this.editIndex)
  }

  onClear() {
    this.todoService.clear()
    this.count = 0
  }
  ngOnInit(): void {


  }
}
