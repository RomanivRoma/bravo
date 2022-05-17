import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainedFabDirective } from './contained/contained.directive';
import { OutlinedFabDirective } from './outlined/outlined.directive';
import { DefaultFabDirective } from './default/default.directive';
import { SizeDirective } from '../size/size.directive';
import { SizeModule } from '../size/size.module';



@NgModule({
  declarations: [
    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,
  ],
  imports: [
    CommonModule,
    SizeModule
  ],
  exports: [
    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,
    SizeDirective
  ]
})
export class FabsModule { }
