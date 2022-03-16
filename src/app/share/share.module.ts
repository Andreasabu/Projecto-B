import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    itemComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
  exports: [
    itemComponent,
  ]
  
})
export class ShareModule { }
