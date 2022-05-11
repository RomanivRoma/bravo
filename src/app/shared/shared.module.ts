import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';

import { DefaultButtonDirective } from './components/buttons/type/default/default.directive';
import { OutlinedButtonDirective } from './components/buttons/type/outlined/outlined.directive';
import { ContainedButtonDirective } from './components/buttons/type/contained/contained.directive';
import { SizeButtonDirective } from './components/buttons/size/size.directive';

import { DefaultFabDirective } from './components/fabs/type/default/default.directive';
import { OutlinedFabDirective } from './components/fabs/type/outlined/outlined.directive';
import { ContainedFabDirective } from './components/fabs/type/contained/contained.directive';
import { SizeFabDirective } from './components/fabs/size/size.directive';

@NgModule({
  declarations: [
    LogoComponent,
    
    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,
    SizeButtonDirective,
    
    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,
    SizeFabDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent,

    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,
    SizeButtonDirective,

    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,
    SizeFabDirective,
  ]
})
export class SharedModule { }
