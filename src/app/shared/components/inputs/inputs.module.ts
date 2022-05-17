import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { LabelComponent } from './label/label.component';
import { SelectDirective } from './select/select.directive';



@NgModule({
  declarations: [
    InputDirective,
    FormFieldComponent,
    LabelComponent,
    SelectDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
    LabelComponent,
    SelectDirective,
  ]
})
export class InputsModule { }
