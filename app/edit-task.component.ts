import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { Category } from './category.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter Task Priority:</label>
        <select [(ngModel)]="childSelectedTask.priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div>
        <label>Enter Task Category:</label>
        <select [(ngModel)]="childSelectedTask.category">
          <option *ngFor="let currentCategory of childCategoryList" value="{{currentCategory.name}}">{{currentCategory.name}}</option>
        </select>
      </div>
      <div>
        <label>Enter Task ID:</label>
        <input [(ngModel)]="childSelectedTask.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Input() childCategoryList: Category[];
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
