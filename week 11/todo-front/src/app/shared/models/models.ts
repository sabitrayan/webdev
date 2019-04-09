import { Time } from '@angular/common';

export interface TaskList{
    id: number;
    name: string;
}

export interface Task{
    id: number;
    name: Date;
    created_at: Date;
    due_on: string;
    status: string;
}