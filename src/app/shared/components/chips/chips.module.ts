import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipItemComponent } from './chip-item/chip-item.component';
import { ChipListComponent } from './chip-list/chip-list.component';



@NgModule({
  declarations: [
    ChipListComponent,
    ChipItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipListComponent,
    ChipItemComponent,
  ]
})
export class ChipsModule { }
