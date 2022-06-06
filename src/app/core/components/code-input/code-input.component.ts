import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'bravo-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeInputComponent),
      multi: true,
    },
  ],
})
export class CodeInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('firstInput') fInput: ElementRef;
  @ViewChild('lastInput') lInput: ElementRef;

  codeLen: number = 3;

  public isDisabled: boolean = true;
  @Input() isValid: boolean = false;
  public codeForm: FormGroup = new FormGroup({
    first: new FormControl(''),
    last: new FormControl(''),
  });
  @Output() onSubmit = new EventEmitter();

  onChange: (value: number) => void;
  constructor() {}

  writeValue(value: any): void {
    if (value) {
      this.codeForm.setValue(value);
    }
  }
  registerOnChange(fn: any): void {
    this.codeForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.lInput.nativeElement.maxLength = this.codeLen;
    this.fInput.nativeElement.maxLength = this.codeLen;
  }
  firstInputChange(e: Event): void {
    const fInput: HTMLInputElement = this.fInput.nativeElement;
    if (fInput.value.length >= this.codeLen) {
      this.lInput.nativeElement.focus();
    }
  }
  lastInputChange(e: Event): void {
    const lInput: HTMLInputElement = this.lInput.nativeElement;
    if (lInput.value.length >= this.codeLen) {
      lInput.setSelectionRange(0, 0);
      lInput.blur();
      this.submitCode();
    }
  }
  submitCode(): void {
    this.onSubmit.emit();
  }
}
