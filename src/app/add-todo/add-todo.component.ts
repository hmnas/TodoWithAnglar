import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  yourTodo = ""
  @Output() todoCreated = new EventEmitter<{ desc: string, active: boolean }>()
  onAddTodo() {
    let newTodo = {
      desc: this.yourTodo,
      active: true
    }
    this.todoCreated.emit(newTodo)
  }
}
