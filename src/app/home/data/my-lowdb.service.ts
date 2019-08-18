import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('db.json');
  public db = this.low(this.adapter);
  public tmp_todo = this.db.defaults({ todo: [] }).write();
  public tmp_link = this.db.defaults({ link: [] }).write();
 
  constructor() { }

  // 输入数据（二者可用）
  set(data: any, key_name: string) {
    this.db.get(key_name).push(data).write();
  }

  // 取数据（二者可用）
  get(key_name: string) {
    return this.db.get(key_name);
  }

  // 删除todo中数据
  remove_todo(item: any) {
    this.db.get('todo').remove(item).write();
  }

  // 改变todo中数据
  change(item: any) {
    this.db.get('test').find({title: item[0], status: !item[1]}).assign({title: item[0], status: item[1]}).write();
  }

  // 删除link中数据
  remove_link(item: any) {
    this.db.get('link').remove(item).write();
  }
  
}
