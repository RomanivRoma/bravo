import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'bravo-logo',
  template: '<img src={{logoType}}/>',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input('min') type: string;

  logoType: string = `${environment.images}/bravo_logo.svg`;

  constructor() { }

  ngOnInit(): void {
    if(this.type == undefined){
      this.logoType = `${environment.images}/bravo_logo_min.svg`;
    }
  }

}
