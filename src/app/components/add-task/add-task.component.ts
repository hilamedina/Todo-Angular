import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() OnNewTask :EventEmitter<Task> = new EventEmitter

  title :String | undefined;
  completed :boolean = false

  constructor() {}
  ngOnInit(): void {}

  onSubmit(){
    if(!this.title){
      alert("please add a task")
      return;
    }
    
    const newTask = {
      title: this.title,
      completed: this.completed
    }
  this.OnNewTask.emit(newTask)
    this.title = "";
    this.completed = false;
  }
}
