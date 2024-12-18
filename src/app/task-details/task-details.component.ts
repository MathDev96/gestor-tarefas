import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  task?: Task;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {

      this.navigateBack();
    }
    
    else {

      this.task = this.taskService.getById(+id);

      if (this.task === undefined) {
        this.navigateBack();
      }
    }
  }

  save() {
    this.taskService.upDateTask();

    this.navigateBack();
  }

  cancel () {
    
    this.navigateBack();
  }

  private navigateBack() {
    
    this.router.navigate(['/taskList'], {relativeTo: this.route});

  }

}
