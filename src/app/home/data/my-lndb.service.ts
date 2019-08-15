import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLndbService {

  public LNDB = require('lndb');
  public db = new this.LNDB('./');
  public pg = this.db.init('page');
  
  set(key: string, value: any) {
    this.pg.set(key, value);
  }

  get(key: string) {
    return this.pg.get(key).data;
  }

  constructor() { }
}
