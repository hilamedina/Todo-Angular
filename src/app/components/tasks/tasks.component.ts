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

ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
}
toggleCompleted(task: Task){
  task.completed = !task.completed;
  console.log(task.completed)
}
newTask(task:Task){
  this.taskService.newTask(task).subscribe((task) => (this.tasks.push(task)));
}
// newTask(task:Task){
//   this.taskService.newTask(task).subscribe((task) => (console.log(task)));
// }
}