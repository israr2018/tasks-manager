import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserType } from '../user/user';
import { USERS } from '../data/app.data';

@Component({
  selector: 'app-users-list',
  imports: [User],
  standalone: true,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  @Output() selectedUser = new EventEmitter<UserType>();
  @Input() users: UserType[] = USERS;
 
  

  onRecieveingSelectedUser(user:UserType){
    console.log(`user====>${user}`);
    // this.userSelected.emit(user);
    
    this.selectedUser.emit(user);

  }

}
