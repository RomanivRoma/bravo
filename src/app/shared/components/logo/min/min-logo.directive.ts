import { Directive, ElementRef, Host, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogoComponent } from '../logo.component';

@Directive({
  selector: '[br-min-logo]'
})
export class MinLogoDirective implements OnInit {

  logoSrc: string = `${environment.images}/bravo_logo_min.svg`;

  constructor(@Host() private baseComponent: LogoComponent) { }

  ngOnInit(): void {
    this.baseComponent.logoSrc = this.logoSrc;
  }
}
