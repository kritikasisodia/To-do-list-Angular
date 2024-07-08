import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  taskArray=[{
    taskName:"Brush",
    isCompleted:false
  }];

  onSubmitTask(form:NgForm){
    this.taskArray.push({
      taskName: form.controls['inputTask'].value,
      isCompleted: false
    });
    form.reset();
  }
  onDelete(index:number){
    this.taskArray.splice(index,1);
  }
  onCheck(i:number){
    // console.log(this.taskArray);
    this.taskArray[i].isCompleted=!this.taskArray[i].isCompleted;
  }

}
