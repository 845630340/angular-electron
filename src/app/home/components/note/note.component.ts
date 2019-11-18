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
  public content: string = this.noteService.get().__wrapped__.note[0].post;  // edit编辑框中，当前显示的内容
  public count = this.noteService.get().__wrapped__.note.length;
  public data_list: any = [];

  public page2_data: string;

  constructor(public noteService: NoteLowdbService) { }
  ngOnInit() {
    // console.log(this.noteService.get())
    // console.log(this.noteService.get().__wrapped__.note[0].post)
  }
  // ------------------------功能 1-------------------------
  edit() {
    this.page = 1;
  }
  save() {
    if (this.content) {
      this.time = new Date();
      this.isShowTime = true;

      let data = {
        post: this.content,
        time: this.time
      }
      this.noteService.set(data);
      this.data_list = this.noteService.get();
      this.count = this.noteService.get().__wrapped__.note.length;;
      alert('已保存。')
    } else {
      alert('还未输入任何内容。')
    }
    
  }

  reset() {
    this.content = '';
    this.isShowTime = false;
  }

  // ------------------------功能 2-------------------------
  show_list() {
    this.page = 2;
    this.data_list = this.noteService.get();
  }

  delete(item: any) {
    this.noteService.remove_note(item);
    this.data_list = this.noteService.get();
    this.count = this.noteService.get().__wrapped__.note.length;
  }

  show_detail(item: any) {
    this.page = 1;
    this.content = item.post;
    this.time = item.time;
    this.isShowTime = true;
  }
  

}
