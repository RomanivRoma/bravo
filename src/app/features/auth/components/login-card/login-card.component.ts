import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';

const emails: string[] = ['roma@gmail.com'];

@Component({
  selector: 'bravo-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isDisabled: boolean = true;
  public isValid: boolean = false;
  public error: string = 'Email is invalid!';
  public isLoading: boolean = false;
  private destroy$: Subject<boolean> = new Subject();
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
  });
  constructor() {}

  ngOnInit(): void {
    this.emailForm.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => {
          this.isDisabled = this.emailForm.status === 'INVALID';
          this.error = 'Email is invalid!';
          this.isValid = !this.isDisabled;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((val) => {});
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  submitForm() {
    const hasUser: boolean = emails.includes(this.emailForm.value.email);
    if (hasUser) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isValid = true;
        this.onSubmit.emit(hasUser);
      }, 1000);
    } else {
      this.error = 'This account doesn’t exist in the system';
      this.isValid = false;
    }
  }
}
