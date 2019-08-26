import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../core/services/electron/storage.service';
import { MyLowdbService } from '../../data/my-lowdb.service';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.scss']
})
export class LinklistComponent implements OnInit {

  public link_list: any = [];
  public link_key: string;
  public link_value: string;

  constructor(public storage: StorageService, public mylowdbService: MyLowdbService) { }

  ngOnInit() {
    this.link_list = this.mylowdbService.get('link').value();
  }

  add(value: string) {
    if (value) {
      let data = {
        key: this.link_key,
        value: value
      };
    
    this.mylowdbService.set(data, 'link');  

    this.link_key = '';
    this.link_value = '';
    }
    
  }

  delete(item: any) {
    this.mylowdbService.remove_link(item);
  }

}
