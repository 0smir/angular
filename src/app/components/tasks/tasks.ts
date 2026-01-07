import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  standalone: true,
})

export class TasksComponent {
  @Input({required: true}) name!: string;
}