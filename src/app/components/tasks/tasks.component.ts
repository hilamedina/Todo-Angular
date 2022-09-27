import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'; 

import {Task} from "../../../app/Task"


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];

constructor(private taskService: TaskService) {}
totalLength: any;
page: number = 1;

ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => {this.tasks = tasks
   this.totalLength = tasks.length;
  });
}

toggleCompleted(task: Task){
  task.completed = !task.completed;
  console.log(task.completed)
}
addTask(task:Task){
  console.log(task);
  this.taskService.addTask(task).subscribe((task) => {this.tasks.push(task)
    console.log(task);
  });
}
remeining(task:Task){
  // this.taskService.remeining(task).subscribe((task) => (!task.completed));
  return  this.tasks.filter((t) => t.completed)
}
}