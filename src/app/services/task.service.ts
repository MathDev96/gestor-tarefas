import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<Task> = [];

  public getTasks(): Array<Task> {
    this.tasks = this.getFromLocalStorage();
    return this.tasks;
  }

  getById(id: number): Task | undefined {
    return this.tasks.find(c => c.id === id);
  }

  public addTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  upDateTask() {
    this.saveToLocalStorage();
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage() {
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  private getFromLocalStorage(): Array<Task> {
    const tasksJSON = localStorage.getItem('tasks');

    if (!tasksJSON) {
      return new Array<Task>();
    }
    return JSON.parse(tasksJSON);
  }
}
