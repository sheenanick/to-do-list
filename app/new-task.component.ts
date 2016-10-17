import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { Category } from './category.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task Priority:</label>
      <select #newPriority>
        <option value="High" selected="selected">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div>
      <label>Enter Task Category:</label>
      <select #newCategory>
        <option *ngFor="let currentCategory of childCategoryList" value="{{currentCategory.name}}">{{currentCategory.name}}</option>
      </select>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <button (click)="addClicked(newDescription.value, newPriority.value, newCategory.value, newId.value); newDescription.value=''; newId.value=''; newPriority.value='High'; newCategory.value='Work';">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Input() childCategoryList: Category[];
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, priority: string, category: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
