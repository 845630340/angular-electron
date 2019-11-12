import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public page = 1;

  constructor() { }
  ngOnInit() {
  }

  edit() {
    this.page = 1;
  }

  show_list() {
    this.page = 2;
  }

}
