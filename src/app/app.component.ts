import {Component} from '@angular/core';
import {Task} from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tasks = [
    new Task(
      "Buy a monkey",
      false
    ),
    new Task(
      "Walk the turtle",
      false
    ),
  ];

  private currentTask = new Task(null, false);

  addTask() {
    const { content, completed } = this.currentTask;
    const task = new Task(content, completed);

    this.tasks.push(task);
    this.currentTask.content = null;
  }
}
