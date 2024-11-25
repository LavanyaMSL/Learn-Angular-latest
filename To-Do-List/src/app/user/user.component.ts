import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { User } from './user.model';
import {CardComponent} from '../shared/card/card.component';
// type User={
//   id:string,
//   name:string,
//   avatar:string
//  };

@Component({
  selector: 'app-user',
  //standalone: true,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
//  @Input({required:true}) avatar!:string;
//  @Input({required:true}) name!:string;
//  @Input({required:true}) id!:string;
 @Input({required:true}) selected:boolean=false;
 @Input({required:true}) user!:User;
 @Output() select=new EventEmitter();
 //select=output<string>();

//  avatar=input.required<string>();
//  name=input.required<string>();

// imagePath=computed(()=>{
//   return 'assets/users/'+this.avatar();
// })
get imagePath(){
  return 'assets/users/'+this.user.avatar;
}

onSelectedUser(){
  console.log("clicked");
  this.select.emit(this.user.id);
}
}
