import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainedButtonDirective } from './contained/contained.directive';
import { OutlinedButtonDirective } from './outlined/outlined.directive';
import { DefaultButtonDirective } from './default/default.directive';
import { SizeDirective } from '../size/size.directive';
import { SizeModule } from '../size/size.module';



@NgModule({
  declarations: [
    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,
  ],
  imports: [
    CommonModule,
    SizeModule
  ],
  exports: [
    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,
    SizeDirective
  ]
})
export class ButtonsModule { }
