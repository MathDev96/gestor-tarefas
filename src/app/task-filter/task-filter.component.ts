import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {

  filter: string = '';

  @Output() taskFilter = new EventEmitter<string>();


  filterTasks () {
    this.taskFilter.emit(this.filter);
  }
}
