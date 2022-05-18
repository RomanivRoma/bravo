import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'bravo-logo',
  template: '<img src={{logoSrc}}/>',
  styles: [
    `
      :host {
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class LogoComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;

  @HostBinding('style.width') get w() {
    return this.width ? this.width : '';
  }
  @HostBinding('style.height') get h() {
    return this.height ? this.height : '';
  }

  logoSrc: string = `${environment.images}/bravo_logo.svg`;

  constructor() {}

  ngOnInit(): void {}
}
