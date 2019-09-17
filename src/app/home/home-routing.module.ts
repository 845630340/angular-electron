import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LinklistComponent } from './components/linklist/linklist.component';
import {WeekRecordComponent } from './components/week-record/week-record.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'home/todolist', component: TodolistComponent},
  {path: 'home/linklist', component: LinklistComponent},
  {path: 'home/week-record', component: WeekRecordComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
