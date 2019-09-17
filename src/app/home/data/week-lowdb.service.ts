import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('db.json');
  public db = this.low(this.adapter);
  public tmp_week = this.db.defaults({
    week: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: ''
    }
  }).write();

  constructor() { }

  set(day: string, value: string) {
    let path = 'week.' + day;
    this.db.set(path, value).write();
  }

  get() {
    return this.db.get('week').value();
  }
}
