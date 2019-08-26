import { Component, OnInit } from '@angular/core';
import {HomeLowdbService} from './data/home-lowdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor(private homelowdbService: HomeLowdbService) { }

  ngOnInit() {
    this.data = this.homelowdbService.get();
  }

  set(value: string, day: string, time: string) {
    this.homelowdbService.set(value, day, time);
    this.data = this.homelowdbService.get()
  }

}
