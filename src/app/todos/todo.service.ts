import { Injectable } from "@angular/core";
import { Todo } from "./todos.model";
import { Subject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class TodoService {
    todos: Todo[] = [{ desc: 'study', active: true, edited: false }]
    startEdit = new Subject<number>()



    getTodo(i: number) {
        return this.todos.slice(i)
    }

    add(todo: Todo) {
        this.todos.push(todo)

    }
    delete(todo: Todo) {
        let index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)

    }

    edit(i: number, newTodo: Todo) {
        this.todos[i] = newTodo
        newTodo.edited = true
    }
    clear() {
        this.todos.length = 0

    }


}