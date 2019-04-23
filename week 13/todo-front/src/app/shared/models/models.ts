import { Time } from '@angular/common';

export interface TaskList {
    id: number;
    name: string;
}

export interface Task {
    id: number;
    name: string;
    created_at: Date;
    due_on: Date;
    status: string;
    task_list: number;
}

export interface IAuthResponse {
  token: string;
}
