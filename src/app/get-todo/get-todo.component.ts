import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-todo',
  templateUrl: './get-todo.component.html',
  styleUrls: ['./get-todo.component.css']
})
export class GetTodoComponent {
  checked = true;

  @Input() element: { desc: string, active: boolean } = {
    desc: '',
    active: true
  }
  @Output() delTodo = new EventEmitter<{ desc: string, active: boolean }>()
  @Output() checkTodo = new EventEmitter<{ desc: string, active: boolean }>()
  @Output() changeTodo = new EventEmitter<{ desc: string, active: boolean }>()

  deletion(todo: { desc: string, active: boolean }) {
    this.delTodo.emit(todo)
  }
  onCheckbox(todo: { desc: string, active: boolean }) {
    this.checkTodo.emit(todo)
  }

  onChangeTodo(todo: { desc: string, active: boolean }) {
    this.changeTodo.emit(todo)
  }
}
