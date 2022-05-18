import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip-directive/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective,
  ]
})
export class TooltipModule { }
