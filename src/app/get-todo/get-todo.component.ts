import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-todo',
  templateUrl: './get-todo.component.html',
  styleUrls: ['./get-todo.component.css']
})
export class GetTodoComponent {
  checked = true;


  @Input() element: { desc: string, active: boolean, edited: boolean } = {
    desc: '',
    active: true,
    edited: false
  }
  @Output() delTodo = new EventEmitter<{ desc: string, active: boolean, edited: boolean }>()
  @Output() checkTodo = new EventEmitter<{ desc: string, active: boolean, edited: boolean }>()
  @Output() changeTodo = new EventEmitter<{ desc: string, active: boolean, edited: boolean }>()

  deletion(todo: { desc: string, active: boolean, edited: boolean }) {
    this.delTodo.emit(todo)
  }
  onCheckbox(todo: { desc: string, active: boolean, edited: boolean }) {
    this.checkTodo.emit(todo)
  }

  onChangeTodo(todo: { desc: string, active: boolean, edited: boolean }) {
    this.changeTodo.emit(todo)

  }
}
