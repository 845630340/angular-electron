import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.scss']
})
export class LinklistComponent implements OnInit {

  public link_list: any = [];
  public link_key: string;
  public link_value: string;

  constructor() { }

  ngOnInit() {
  }

  add(e: any) {
    if (e.keyCode == 13) {
      this.link_list.push(
        {
          key: this.link_key,
          value: this.link_value
        }
      );

      this.link_key = '';
      this.link_value = '';
    }
  }

}
