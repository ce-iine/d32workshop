import { Component } from '@angular/core';
import { Task } from './models';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // todoList!:FormArray

  todoList: Task[]= []

  addToList(task: Task){
    this.todoList.push(task)
    console.log("received task in component and, todolist looks like that", this.todoList)
  }

  obj: Task |undefined

  deleteTask(todo: Task){
    this.obj = this.todoList.find(o => o.description === todo.description)
    if (this.obj != null){
      let foundIndex = this.todoList.indexOf(this.obj, 0);
      this.todoList.splice(foundIndex, 1)
      console.log("removed this todo", todo.description)
    }
  }

}
