import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '../shared/components/inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CodeInputComponent } from './components/code-input/code-input.component';
import { NumberInputDirective } from './directives/number-input-directive/number-input.directive';



@NgModule({
  imports: [
    CommonModule,
    InputsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpinnerComponent,
    CodeInputComponent,
    NumberInputDirective,
  ],
  exports: [
    CodeInputComponent,
    SpinnerComponent,
  ]
})
export class CoreModule { }
