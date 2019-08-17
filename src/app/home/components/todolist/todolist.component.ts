import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../core/services/electron/storage.service';
import { MyLndbService } from '../../data/my-lndb.service';
import { MyLowdbService } from '../../data/my-lowdb.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todo_list: any=[];

  constructor(
    public storage: StorageService, 
    public mylndbService: MyLndbService,
    public mylowdbService: MyLowdbService) { }
    

  ngOnInit() {
    this.todo_list = this.mylowdbService.get().value();
  }

  add(e: any) {
    if (e.keyCode == 13) {
      if (this.isArray(this.keyword) == false) {
        let data = {
          title: this.keyword,
          status: 0
        };
        this.mylowdbService.set(data);
      }else {
        alert(this.keyword+' 已存在。')
      }
      this.keyword = '';
    }
  }

  delete(item: any) {
    this.mylowdbService.remove(item);
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
    
    this.mylndbService.set('todo_key', this.todo_list);
  }
  

}
