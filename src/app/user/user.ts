import { Component, EventEmitter, Input, Output } from '@angular/core';
export type UserType={
  id:string,
  name:string,
  photo:string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({required:true}) user!:UserType
  @Output() selectUser=new EventEmitter<UserType>()

  onSelectUser(){
    this.selectUser.emit(this.user);
  }
}