import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip-directive/tooltip.directive';
import { TooltipPositionDirective } from './tooltip-position/tooltip-position.directive';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipPositionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective,
    TooltipPositionDirective,
  ]
})
export class TooltipModule { }
