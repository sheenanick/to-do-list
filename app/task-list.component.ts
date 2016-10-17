import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CompletenessPipe } from './completeness.pipe';
import { Category } from './category.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChangeDone($event.target.value)" class="filter">
      <option value="all" selected>Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone">Show Not Done</option>
    </select>
    <select (change)="onChangeCategory($event.target.value)" class="filter">
      <option value="all" selected>Show All</option>
      <option *ngFor="let currentCategory of childCategoryList" value="{{currentCategory.name}}">{{currentCategory.name}}</option>
    </select>
    <select (change)="onChangePriority($event.target.value)" class="filter">
      <option value="all" selected>Show All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | category:selectedCategory | priority:selectedPriority">
      <task-display [task]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "all";
  onChangeDone(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }
  public selectedCategory: string = "all";
  onChangeCategory(optionFromMenu) {
    this.selectedCategory = optionFromMenu;
  }
  public selectedPriority: string = "all";
  onChangePriority(optionFromMenu) {
    this.selectedPriority = optionFromMenu;
  }
  @Input() childTaskList: Task[];
  @Input() childCategoryList: Category[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
