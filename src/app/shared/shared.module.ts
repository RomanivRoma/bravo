import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';

import { SizeDirective } from './components/size/size.directive';

import { DefaultButtonDirective } from './components/buttons/default/default.directive';
import { OutlinedButtonDirective } from './components/buttons/outlined/outlined.directive';
import { ContainedButtonDirective } from './components/buttons/contained/contained.directive';

import { DefaultFabDirective } from './components/fabs/default/default.directive';
import { OutlinedFabDirective } from './components/fabs/outlined/outlined.directive';
import { ContainedFabDirective } from './components/fabs/contained/contained.directive';

import { ChipListComponent } from './components/chips/chip-list/chip-list.component';
import { ChipItemComponent } from './components/chips/chip-item/chip-item.component';

@NgModule({
  declarations: [
    LogoComponent,
    
    SizeDirective,

    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,
    
    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,

    ChipListComponent,
    ChipItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent,

    SizeDirective,

    DefaultButtonDirective,
    OutlinedButtonDirective,
    ContainedButtonDirective,

    DefaultFabDirective,
    OutlinedFabDirective,
    ContainedFabDirective,

    ChipListComponent,
    ChipItemComponent,
  ]
})
export class SharedModule { }
