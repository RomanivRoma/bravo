import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastButtonDirective } from './button/toast-button.directive';
import { SuccessToastComponent } from './success-toast/success-toast.component';
import { WaitToastComponent } from './wait-toast/wait-toast.component';



@NgModule({
  declarations: [
    ToastComponent,
    ToastButtonDirective,
    SuccessToastComponent,
    WaitToastComponent,

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
