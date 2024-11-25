import { Component, Input } from '@angular/core';
import {TaskComponent} from '../tasks/task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
 // imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) name?:string;
@Input({required:true}) userId!:string;
showNewTask:boolean=false;
constructor(private taskService:TaskService){}

addTask(){
this.showNewTask=true;
}
 

get selectUserTasks(){
  return this.taskService.getSelectedUsersTask(this.userId!);
}

addNewTask(task:NewTaskData){
this.taskService.addNewTaskData(task,this.userId!);
this.showNewTask=false;
}

}
