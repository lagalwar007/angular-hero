import { task } from './../task.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('task') task: task;
  constructor() { }

  ngOnInit() {
  }

}
