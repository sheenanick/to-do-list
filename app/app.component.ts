import { Component } from '@angular/core';
import { Task } from './task.model';
import { Category } from './category.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <task-list [childTaskList]="masterTaskList" [childCategoryList]="masterCategoryList"  (clickSender)="showDetails($event)"></task-list>
    <edit-task [childSelectedTask]="selectedTask" [childCategoryList]="masterCategoryList"  (doneClickedSender)="finishedEditing()"></edit-task>
    <new-task [childCategoryList]="masterCategoryList" (newTaskSender)="addTask($event)"></new-task>
    <new-category (newCategorySender)="addCategory($event)"></new-category>
  </div>`
  })

  export class AppComponent {
    public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0, "High", "Work"),
      new Task("Learn Kung Fu.", 1, "Low", "Hobby"),
      new Task("Rewatch all the Lord of the Rings movies.", 2, "Medium", "Hobby"),
      new Task("Do the laundry.", 3, "High", "Home")
    ];
    public masterCategoryList: Category[] = [
      new Category("Work"),
      new Category("Hobby"),
      new Category("Home")
    ];
    selectedTask: Task = null;
    showDetails(clickedTask: Task) {
      this.selectedTask = clickedTask;
    }
    finishedEditing() {
      this.selectedTask = null;
    }
    addTask(newTaskFromChild: Task) {
      this.masterTaskList.push(newTaskFromChild);
    }
    addCategory(newCategoryFromChild: Category) {
      this.masterCategoryList.push(newCategoryFromChild);
    }
  }
