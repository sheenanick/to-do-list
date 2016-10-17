import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], completeness) {
    var output: Task[] = [];
    if(completeness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
    } else if (completeness === "isDone") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === true) {
            output.push(input[i]);
          }
        }
    } else {
      output = input;
    }
    return output
  }
}
