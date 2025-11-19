import { UserType } from '../types/user.type';
import { Task } from '../types/task.interface';

export const USERS: UserType[] = [
  {
    id: '1',
    name: 'Israr ul Haq',
    photo: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: '2',
    name: 'Aisha Khan',
    photo: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: '3',
    name: 'Michael Smith',
    photo: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '4',
    name: 'Sara Ahmed',
    photo: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: '5',
    name: 'John Doe',
    photo: 'https://i.pravatar.cc/150?img=22'
  },
  {
    id: '6',
    name: 'Emily Watson',
    photo: 'https://i.pravatar.cc/150?img=56'
  },
  {
    id: '7',
    name: 'Ali Raza',
    photo: 'https://i.pravatar.cc/150?img=14'
  },
  {
    id: '8',
    name: 'Noor Fatima',
    photo: 'https://i.pravatar.cc/150?img=52'
  },
  {
    id: '9',
    name: 'David Cooper',
    photo: 'https://i.pravatar.cc/150?img=29'
  },
  {
    id: '10',
    name: 'Hina Malik',
    photo: 'https://i.pravatar.cc/150?img=65'
  }
];

export const TASKS:Task[]=[
    { id: "1", title: 'Prepare project report', completed: false, assignedTo: "1" },
    { id: "2", title: 'Review pull requests', completed: true, assignedTo: "1" },
    { id: "3", title: 'Fix login bug', completed: false, assignedTo: "2" },
    { id: "4", title: 'Update UI design', completed: true, assignedTo: "3" },
    { id: "5", title: 'Email client updates', completed: false, assignedTo: "2" },
    { id: "6", title: 'Write API documentation', completed: false, assignedTo: "3" },

]



