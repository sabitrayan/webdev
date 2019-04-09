import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { TaskList, Task } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public task_lists: TaskList[] = [];
  public task_list: TaskList = {
    "id": 1,
    "name": "Task"
  };
  public tasks: Task[] = [];
  public loading = true;
  public check;
  public i = 0;
  constructor(private provider: ApiService) { }

  ngOnInit() {
    this.getTaskLists();
    
  }

  getTaskLists(){
    this.provider.getTaskLists().then( res => {
      this.tasks = [];
      this.task_lists = res;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }

  getTaskList(task_list: TaskList){
    
    this.provider.getTaskList(task_list).then(res => {
      this.task_list = res;
    });

  }

  getTasks(){
    this.provider.getTasks(this.task_list).then(res => {
      this.check = res;
      this.tasks = res;
    });

  }

}
