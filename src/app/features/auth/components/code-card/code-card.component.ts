import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const code = 123123;

@Component({
  selector: 'bravo-code-card',
  templateUrl: './code-card.component.html',
  styleUrls: ['./code-card.component.scss'],
})
export class CodeCardComponent implements OnInit {
  public isLoading: boolean = false;

  constructor() {}

  ngOnInit() {}

  submit() {
    this.isLoading = true
    console.log('code submitted');
    setTimeout(() => {
      this.isLoading = false
    }, 20000);
  }
}
