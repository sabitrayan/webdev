import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { TaskList, Task } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends MainService{


  constructor(http: HttpClient) { 
    super(http);
  }

  getTaskLists(): Promise<TaskList[]>{
    // console.log(this.get(`http://127.0.0.1:8000/api/task_lists/`, {}));
    return this.get(`http://127.0.0.1:8000/api/task_lists/`, {});
  }
  getTaskList(task_list: TaskList): Promise<TaskList>{
    return this.get(`http://127.0.0.1:8000/api/task_lists/${task_list.id}/`, {});
  }
  getTasks(task_list: TaskList): Promise<Task[]>{
    return this.get(`http://127.0.0.1:8000/api/task_lists/${task_list.id}/tasks/`, {});
  }
}
 