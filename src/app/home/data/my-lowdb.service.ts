import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('db.json');
  public db = this.low(this.adapter);
  public tmp = this.db.defaults({ test: [] }).write();
 
  constructor() { }

  set(data: any) {
    this.db.get('test').push(data).write();
    alert('数据已写入，请查看。')
  }

  get() {
    return this.db.get('test');
  }

  remove(item: any) {
    this.db.get('test').remove({title:item.title, status: item.status}).write();
  }

  
}
