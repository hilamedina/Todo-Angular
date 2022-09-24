import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() OnNewTask :EventEmitter<Task> = new EventEmitter

  text! :String;
  completed :boolean = false

  constructor() {}
  ngOnInit(): void {}

  onSubmit(){
    if(!this.text){
      alert("please add a task")
      return;
    }
    
    const newTask = {
      text: this.text,
      completed: this.completed
    }
  this.OnNewTask.emit(newTask)

    this.text = "";
    this.completed = false;
  }
}
