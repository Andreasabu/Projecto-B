import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
  
})
export class ShareModule { }
