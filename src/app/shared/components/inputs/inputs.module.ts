import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { LabelComponent } from './label/label.component';
import { SelectDirective } from './select/select.directive';
import { SelectComponent } from './select/select/select.component';
import { OptionComponent } from './select/option/option.component';

@NgModule({
  declarations: [
    InputDirective,
    FormFieldComponent,
    LabelComponent,
    SelectDirective,
    SelectComponent,
    OptionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
    LabelComponent,
    SelectDirective,
    SelectComponent,
    OptionComponent,
  ]
})
export class InputsModule { }
