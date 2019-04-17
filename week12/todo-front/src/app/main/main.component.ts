import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { TaskList, Task } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tasklists: TaskList[] = [];
  public tasklist: TaskList;
  public tasks: Task[] = [];
  public task: Task;
  public name: any = '';
  constructor(private provider: ApiService) { }

  ngOnInit() {
    this.getTaskLists();
  }

  getTaskLists() {
    this.provider.getTaskLists().then( res => {
      this.tasks = [];
      this.tasklists = res;
    });
  }
  createTaskList() {
    if (this.name !== '') {
        this.provider.createTaskList(this.name).then(res => {
          console.log(res.name + ' tasklist created');
          this.name = '';
          this.tasklists.push(res);
        });
    }
  }

  getTaskList(tasklist: TaskList) {
    this.provider.getTaskList(tasklist).then(res => {
      if (tasklist !== this.tasklist) {
        this.task = null;
      }
      this.tasklist = res;
      console.log(this.task);
    });
  }
  updateTaskList(tasklist: TaskList) {
    console.log(tasklist.name + ' updated');
    this.provider.updateTaskList(tasklist).then(res => {
      this.tasklist = res;
      this.getTaskLists();
    });
  }
  deleteTaskList(tasklist: TaskList) {
    this.provider.deleteTaskList(tasklist).then(res => {
      console.log(tasklist.name + ' deleted');
      this.tasklist = null;
      this.getTaskLists();
    });
  }
  getTaskListsTasks(tasklist: TaskList) {
    this.provider.getTaskListsTask(tasklist).then(res => {
      this.tasks = res;
      this.getTaskList(tasklist);
    });
  }
  getTasks() {
    this.provider.getTasks().then(res => {
      this.tasks = res;
    });
  }
  createTask(name: any, createdAt: any, dueOn: any, status: any, tasklist: number) {
    this.provider.createTask(name, createdAt, dueOn, status, tasklist).then(res => {
      this.getTaskListsTasks(this.tasklist);
    });
  }
  getTask(task: Task) {
    this.provider.getTask(task).then(res => {
      this.task = res;
    });
  }
  updateTask(task: Task) {
    this.provider.updateTask(task).then(res => {
      task = res;
      this.getTaskListsTasks(this.tasklist);
    });
  }
  deleteTask(task: Task) {
    this.provider.deleteTask(task).then(res => {
      this.getTaskListsTasks(this.tasklist);
      task = null;
    });
  }

}
