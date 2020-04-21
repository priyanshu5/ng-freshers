// import { Todo } from './../../../03_pipes/models/todo.interface';
import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  todos ;
  selectedRow : Number;
  getClickedRow : Function;
  constructor( arr: AssignmentComponent){
      this.todos = arr.getTodos();
      this.getClickedRow = function(index){
      this.selectedRow = index; 
  }
}
}
