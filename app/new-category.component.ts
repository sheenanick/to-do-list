import { Component, Output, EventEmitter } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'new-category',
  template: `
  <h1>New category</h1>
  <div>
    <label>Enter Category Name:</label>
    <input #newName>
  </div>
  <button (click)="addClicked(newName.value); newName.value='';">Add</button>
  `
})

export class NewCategoryComponent {
  @Output() newCategorySender = new EventEmitter();
  addClicked(name: string) {
    var newCategoryToAdd: Category = new Category(name);
    this.newCategorySender.emit(newCategoryToAdd);
  }
}
