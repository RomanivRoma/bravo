import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { DefaultDirective } from './components/buttons/type/default/default.directive';
import { OutlinedDirective } from './components/buttons/type/outlined/outlined.directive';
import { ContainedDirective } from './components/buttons/type/contained/contained.directive';
import { SizeDirective } from './components/buttons/size/size.directive';


@NgModule({
  declarations: [
    LogoComponent,
    DefaultDirective,
    OutlinedDirective,
    ContainedDirective,
    SizeDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent,
    DefaultDirective,
    OutlinedDirective,
    ContainedDirective,
    SizeDirective,
  ]
})
export class SharedModule { }
