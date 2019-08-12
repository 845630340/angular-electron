import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../core/services/electron/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todo_list: any=[];

  constructor(public storage: StorageService) { }

  ngOnInit() {
    let getdata: any = this.storage.get('todolist');
    if (getdata) {
      this.todo_list = getdata;
    }
  }

  add(e: any) {
    if (e.keyCode == 13) {
      if (this.isArray(this.keyword) == false) {
        this.todo_list.push(
          {
            title: this.keyword,
            status: 0
          }
        );

        this.storage.set('todolist', this.todo_list);
      }else {
        alert(this.keyword+' 已存在。')
      }
      this.keyword = '';
    }
  }

  delete(key: any) {
    this.todo_list.splice(key, 1);
    this.storage.set('todolist', this.todo_list);
  }

  isArray(keyword: any) {
    for (var i=0; i< this.todo_list.length; i++) {
      if (keyword == this.todo_list[i].title) {
        return true;
      }
    }
    return false;
  }

  checkboxChange() {
    this.storage.set('todolist', this.todo_list);
  }

}
