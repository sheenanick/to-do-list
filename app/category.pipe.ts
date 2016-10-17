import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], category) {
    var output: Task[] = [];
    if (category === "all") {
      output = input;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === category) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
