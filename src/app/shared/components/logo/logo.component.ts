import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'bravo-logo',
  template: '<img src={{logoType}}/>',
  styles: [`:host{
              display: block;
            } 
            img{
              width: 100%;
              height: 100%;
            }`]
})
export class LogoComponent implements OnInit {
  @Input('min') type: string;
  @Input() width: string;
  @Input() height: string;

  @HostBinding('style.width') get w() {
    return this.width ? this.width : '';
  }
  @HostBinding('style.height') get h() {
    return this.height ? this.height : '';
  }

  logoType: string = `${environment.images}/`;

  constructor() { }

  ngOnInit(): void {
    const isMin = this.type == undefined ? '' : '_min'
    this.logoType += `bravo_logo${isMin}.svg`;
  }

}
