import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastButtonDirective } from './button/toast-button.directive';



@NgModule({
  declarations: [
    ToastComponent,
    ToastButtonDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent,
    ToastButtonDirective,
  ]
})
export class ToastModule { }
