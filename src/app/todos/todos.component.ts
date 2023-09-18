import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = [{ desc: 'Coding', active: true }]

  addTodo(todo: { desc: string, active: boolean }) {
    this.todos.push(todo)
  }
  deleteTodo(todo: { desc: string, active: boolean }) {
    let index = this.todos.indexOf(todo)
    this.todos.splice(index,)
  }
  checkToggle(todo: { desc: string, active: boolean }) {
    let index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
  }
  editTodo(todo: { desc: string, active: boolean }) {

  }
}
