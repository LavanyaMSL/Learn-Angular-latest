import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header. component';
import {UserComponent} from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './user';

@Component({
  selector: 'app-root',
  standalone: false,
//  imports: [RouterOutlet,HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-List';
 selectedUserId?:string;
  users=DUMMY_USERS;

  get selectedUser(){
    return this.users.find(s=>s.id===this.selectedUserId);
  }

  onSelectedUser(id:string){
    console.log("Selected user is "+id);
    this.selectedUserId=id;
  }
}
