import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('src/dbs/note_db.json');
  public db = this.low(this.adapter);
  public tmp_note = this.db.defaults({ note: [] }).write();

  constructor() { }

  // 输入数据
  set(data: any) {
    this.db.get('note').push(data).write();
  }

  // 取数据
  get() {
    return this.db.get("note");
  }

  // 删除数据
  remove_note(item: any) {
    this.db.get('note').remove(item).write();
  }
}
