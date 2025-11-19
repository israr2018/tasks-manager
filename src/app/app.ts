import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User, UserType } from './user/user';
import { UsersList } from './users-list/users-list';

@Component({
  selector: 'app-root',
  imports: [Header,UsersList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  
  protected readonly title = signal('tasks-manager');
  selectedUser: UserType | null = null;

  onUserSelected(user: UserType): void {
    console.log('app.ts -selectedUser');
    this.selectedUser = user;
  }


}
