import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/buttons/button/button.component';


@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LogoComponent
  ]
})
export class SharedModule { }
