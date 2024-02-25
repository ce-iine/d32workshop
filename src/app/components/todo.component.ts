import { Component, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  private fb: FormBuilder = inject(FormBuilder)

  todoForm!: FormGroup

  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
  }

  createTodoForm(): FormGroup{
    return this.fb.group({ //curly bracket is map in typescript
      description: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      priority: this.fb.control<string>('', [Validators.required]),  
      completeBy: this.fb.control<string>('', Validators.required),
    })
  }

  @Output()
  addTask = new Subject<Task>()

  processForm(){
    console.log("form filles", this.todoForm.value);
    const filled: Task = this.todoForm.value
    this.addTask.next(filled);
    this.todoForm = this.createTodoForm()
  }

}
