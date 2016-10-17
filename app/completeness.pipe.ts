import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], info, info1, info2) {
    var desiredCompleteness = info;
    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === true) {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
