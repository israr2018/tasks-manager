import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {UserType } from './types/user.type'
import {Task} from './types/task.interface'
import { UsersList } from './users-list/users-list';
import { USERS,TASKS } from './data/app.data';
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
  allTaskList: Task[] = [];
  filteredTasks: Task[] = [];
  allUsers:UserType[]=[];

  onUserSelected(user: UserType): void {
    console.log(`user==>`,user);
    this.selectedUser = user;
    this.filteredTasks = this.allTaskList.filter(
      task => task.assignedTo === user.id
    );
  }
// 🔹 ngOnInit lifecycle
  ngOnInit(): void {

    this.allUsers=USERS;
    this.allTaskList=TASKS;
    console.log('Tasks Loaded:', this.allTaskList);
  }
  


}
