import { Component, OnInit } from '@angular/core';
import {MyLndbService} from './data/my-lndb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public mylndbService: MyLndbService) { }

  ngOnInit() {
  }

}
