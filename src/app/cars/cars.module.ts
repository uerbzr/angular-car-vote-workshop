import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent, ViewComponent, ListComponent, EditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [AddComponent, ViewComponent, ListComponent, EditComponent],
})
export class CarsModule {}
