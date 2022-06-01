import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bravo-code-card',
  templateUrl: './code-card.component.html',
  styleUrls: ['./code-card.component.scss'],
})
export class CodeCardComponent implements OnInit {
  public isDisabled: boolean = true;
  public isValid: boolean = false;

  constructor() {}

  ngOnInit() {}

  submitCode(): void {

  }
}
