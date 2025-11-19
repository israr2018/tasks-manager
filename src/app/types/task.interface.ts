export interface Task {
  id: string;
  title: string;
  completed?:boolean,
  assignedTo: string; // userId
}