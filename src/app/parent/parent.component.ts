import { task } from './../task.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  status:boolean = false;
  tasks:task[] = [
    {
      name:'task1',
      isComplete:false
    },
    {
      name:'task2',
      isComplete:false
    },
    {
      name:'task3',
      isComplete:false
    },
    {
      name:'task4',
      isComplete:false
    },
]
  @Input('headerTitle') title: string;
  @Output() change = new EventEmitter();
  constructor() { }
  setParentBox(){
    this.status = !this.status;
    this.change.emit(this.status);
  }
  ngOnInit() {
  }

}
