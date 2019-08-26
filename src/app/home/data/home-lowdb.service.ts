import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeLowdbService {

  public low = require('lowdb');
  public FileSync = require('lowdb/adapters/FileSync');
  public adapter = new this.FileSync('db.json');
  public db = this.low(this.adapter);
  public home = this.db.defaults({ home: {
    monday: { morning: '', afternoon: '', night: '' },
    tuesday: { morning: '', afternoon: '', night: '' },
    wednesday: { morning: '', afternoon: '', night: '' },
    thursday: { morning: '', afternoon: '', night: '' },
    friday: { morning: '', afternoon: '', night: '' },
    saturday: { morning: '', afternoon: '', night: '' },
    sunday: { morning: '', afternoon: '', night: '' }
  }}).write();

  constructor() { }

  set(value: string, day: string, time: string) {
    let path = 'home.' + day + '.' + time;
    this.db.set(path, value).write();
  }

  get() {
    return this.db.get('home').value();
  }
}
