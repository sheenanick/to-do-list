import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], priority) {
    var output: Task[] = [];
    if(priority === "High") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "High") {
          output.push(input[i]);
        }
      }
    } else if (priority === "Medium") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "Medium") {
          output.push(input[i]);
        }
      }
    } else if (priority === "Low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "Low") {
          output.push(input[i]);
        }
      }
    } else {
      output = input;
    }
    return output
  }
}
