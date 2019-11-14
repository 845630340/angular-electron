import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('src/dbs/note_db.json');
  public db = this.low(this.adapter);
  public tmp_note = this.db.defaults({ week: [] }).write();

  constructor() { }

  // 输入数据
  set(data: any) {
    console.log("ok, come in.")
    this.db.get('week').push(data).write();
  }
}
