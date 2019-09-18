import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NgZorroAntdModule} from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { StorageService } from '../core/services/electron/storage.service';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LinklistComponent } from './components/linklist/linklist.component';
import { WeekRecordComponent } from './components/week-record/week-record.component';

@NgModule({

  declarations: [HomeComponent, TodolistComponent, LinklistComponent, WeekRecordComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FormsModule],

  providers: [StorageService]
})
export class HomeModule {}
