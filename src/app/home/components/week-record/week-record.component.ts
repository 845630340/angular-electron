import { Component, OnInit } from '@angular/core';
import { WeekLowdbService} from '../../data/week-lowdb.service';

@Component({
  selector: 'app-week-record',
  templateUrl: './week-record.component.html',
  styleUrls: ['./week-record.component.scss']
})
export class WeekRecordComponent implements OnInit {
  
  public data: any;

  constructor( private weekSerivce: WeekLowdbService) { }

  ngOnInit() {
    this.data = this.weekSerivce.get();
  }

  public change: boolean = false;
  changeSize(name: string) {
    this.change = !this.change;
    var elem = document.getElementById(name);
    if(this.change) {
      elem.style.height = "380px";
    } else {
      elem.style.height = "220px";
    }
  }

  save(day: string, value: string) {
    this.weekSerivce.set(day, value);
    this.data = this.weekSerivce.get();
  }

  // guide() {
  //   prompt("1.点击'周一'...'周五'，对应的编辑框变长。\n\n2.编辑完后，点击空白页面才能保存。")
  // }
  public showModal: boolean = false;
  guide() {
    this.showModal = !this.showModal;
  }
}
