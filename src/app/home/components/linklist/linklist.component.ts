import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../core/services/electron/storage.service';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.scss']
})
export class LinklistComponent implements OnInit {

  public link_list: any = [];
  public link_key: string;
  public link_value: string;

  constructor(public storage: StorageService) { }

  ngOnInit() {
    let getdata = this.storage.get('linklist');
    if (getdata) {
      this.link_list = getdata;
    }
  }

  add(value: string) {
    
    this.link_list.push(
      {
        key: this.link_key,
        value: value
      }
    );
    this.storage.set('linklist', this.link_list);

    this.link_key = '';
    this.link_value = '';
  }

  delete(key: any) {
    this.link_list.splice(key, 1);
    this.storage.set('linklist', this.link_list);
  }

}
