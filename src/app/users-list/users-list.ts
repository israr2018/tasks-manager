import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserType } from '../user/user';
import { USERS } from '../data/users.data';

@Component({
  selector: 'app-users-list',
  imports: [User],
  standalone: true,
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  @Output() userSelected = new EventEmitter<UserType>();
  @Input() users: UserType[] = USERS;
  

  recieveSelectedUser(user:UserType){
    console.log(`user====>${user}`);
    // this.userSelected.emit(user);

  }

}
