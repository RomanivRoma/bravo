import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { MinLogoDirective } from './min/min-logo.directive';



@NgModule({
  declarations: [
    LogoComponent,
    MinLogoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinLogoDirective,
    LogoComponent
  ]
})
export class LogoModule { }
