import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeDirective } from './size.directive';



@NgModule({
  declarations: [
    SizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SizeDirective
  ]
})
export class SizeModule { }
