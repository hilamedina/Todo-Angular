import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Task} from '../../Task'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onToggleCompleted: EventEmitter<Task> = new EventEmitter

  faTimes= faTimes
  shouldDisplayTask : boolean = true

  constructor() {}

  ngOnInit(): void {}

  onToggle(task: Task){
    this.onToggleCompleted.emit(task);
  }
  toggleDisplay(){
    this.shouldDisplayTask = !this.shouldDisplayTask
  }
  }


