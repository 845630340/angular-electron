import { Component, OnInit } from '@angular/core';
import {  NoteLowdbService } from '../../data/note-lowdb.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public page = 1;  // 根据左边button变换页面内容
  public time: Date;  // edit文章的保存时间
  public isShowTime: boolean = false;
  public content: string;  // edit编辑框中，当前显示的内容

  public page2_data: string;

  constructor(public noteService: NoteLowdbService) { }
  ngOnInit() {
    
  }
  // ------------------------功能1-------------------------
  edit() {
    this.page = 1;
  }
  save() {
    this.time = new Date();
    this.isShowTime = true;
    this.page2_data = this.content;

    let data = {
      post: this.content,
      time: this.time
    }
    console.log("data is:", data);
    this.noteService.set(data);
  }

  reset() {
    this.content = '';
    this.isShowTime = false;
  }

  // ------------------------功能2-------------------------
  show_list() {
    this.page = 2;
  }

  

}
