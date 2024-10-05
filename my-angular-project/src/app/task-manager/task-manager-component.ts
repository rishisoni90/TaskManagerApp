import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task-service';


export class TaskManagerComponent implements OnInit {
  tasks: any[] = [];
  newTask: string = '';
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask({ name: this.newTask }).subscribe(() => {
        this.getTasks();
        this.newTask = '';
      });
    }
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getTasks();
    });
  }

  updateTask(task: any) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(() => {
      this.getTasks();
    });
  }
}
