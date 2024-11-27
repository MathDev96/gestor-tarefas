import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
