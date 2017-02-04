import { Component } from '@angular/core';
import { Task } from './model/task ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task1: Task = {
    content: "Buy some milk",
    completed: false
  }
}
