import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { TaskList, Task } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends MainService {


  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<TaskList[]> {
    // console.log(this.get(`http://127.0.0.1:8000/api/task_lists/`, {}));
    return this.get(`http://127.0.0.1:8000/api/task_lists/`, {});
  }

  createTaskList(nme: any): Promise<TaskList> {
    // console.log(this.get(`http://127.0.0.1:8000/api/task_lists/`, {}));
    return this.post(`http://127.0.0.1:8000/api/task_lists/`, {
      name: nme
    });
  }
  getTaskList(tasklist: TaskList): Promise<TaskList> {
    return this.get(`http://127.0.0.1:8000/api/task_lists/${tasklist.id}/`, {});
  }
  updateTaskList(tasklist: TaskList): Promise<TaskList> {
    return this.put(`http://127.0.0.1:8000/api/task_lists/${tasklist.id}/`, {
      name: tasklist.name
    });
  }
  deleteTaskList(tasklist: TaskList): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/task_lists/${tasklist.id}/`, {});
  }
  getTaskListsTask(tasklist: TaskList): Promise<Task[]> {
    return this.get(`http://127.0.0.1:8000/api/task_lists/${tasklist.id}/tasks/`, {});
  }
  getTasks(): Promise<Task[]> {
    return this.get(`http://127.0.0.1:8000/api/tasks/`, {});
  }
  createTask(name: any, createdAt: any, dueOn: any, status: any, tasklist: number): Promise<Task> {
    return this.post(`http://127.0.0.1:8000/api/tasks/`, {
      name: name,
      created_at: createdAt,
      due_on: dueOn,
      status: status,
      task_list: tasklist
    });
  }
  getTask(task: Task): Promise<Task> {
    return this.get(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {});
  }
  updateTask(task: Task): Promise<Task> {
    return this.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
      name: task.name,
      created_at: task.created_at,
      due_on: task.due_on,
      status: task.status,
      task_list: task.task_list
    });
  }
  deleteTask(task: Task): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {})
  }

}
