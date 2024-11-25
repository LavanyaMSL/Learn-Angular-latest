import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
@Output() closeAddTaskDialog=new EventEmitter<void>();
@Input({required:true}) userId!:string;
enteredTitle="";
enteredSummary="";
enteredDate="";
private taskService=inject(TaskService);
closeNewTask(){
  this.closeAddTaskDialog.emit();
}
onSubmit(){
  this.taskService.addNewTaskData({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate},this.userId);
    this.closeNewTask();
}

}
