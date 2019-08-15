import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../core/services/electron/storage.service';
import { MyLndbService } from '../../data/my-lndb.service';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.scss']
})
export class LinklistComponent implements OnInit {

  public link_list: any = [];
  public link_key: string;
  public link_value: string;

  constructor(public storage: StorageService, public mylndbService: MyLndbService) { }

  ngOnInit() {
    // let getdata = this.storage.get('linklist');
    // if (getdata) {
    //   this.link_list = getdata;
    // }
    let getdata = this.mylndbService.get('link_key');
    if (getdata) {
      this.link_list = getdata;
    }
  }

  add(value: string) {
    if (value) {
      this.link_list.push(
      {
        key: this.link_key,
        value: value
      }
    );
    // this.storage.set('linklist', this.link_list);
    this.mylndbService.set('link_key', this.link_list);  //尝试优化，不是更新所有数据

    this.link_key = '';
    this.link_value = '';
    }
    
  }

  delete(key: any) {
    this.link_list.splice(key, 1);
    // this.storage.set('linklist', this.link_list);  // 要优化
    this.mylndbService.set('link_key', this.link_list);
  }

}
