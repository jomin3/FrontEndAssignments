import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class newtask {
  tasknow: string;
  task: string;
  present: boolean;
  edit: boolean;
  constructor(
    presenttask: string,
    task: string,
    presentst: boolean,
    editst: boolean
  ) {
    this.tasknow = presenttask;
    this.task = task;
    this.present = presentst;
    this.edit = editst;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  id: string = 'task';
  count: number = 1;
  presenttask: string = '';
  task: string = '';
  present: boolean = true;
  edit: boolean = true;
  newtask(val: string) {
    console.log(val);
    this.count = this.count + 1;
    this.task = val;
    this.presenttask = this.id + this.count;
    this.alltask.push(
      new newtask(this.presenttask, this.task, this.present, this.edit)
    );
  }

  alltask: newtask[] = [];
  del(element: string) {
    this.alltask.forEach((ele, val) => {
      if (ele.tasknow == element) {
        this.alltask[val].present = false;
      }
    });
  }
  ed(element: string) {
    this.alltask.forEach((ele, val) => {
      if (ele.tasknow == element) {
        this.alltask[val].edit = !ele.edit;
      }
    });
  }
}
