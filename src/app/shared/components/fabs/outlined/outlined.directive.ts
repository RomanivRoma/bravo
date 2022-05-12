import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { DefaultFabDirective } from '../default/default.directive';

@Directive({
  selector: '[br-fab-outlined]'
})
export class OutlinedFabDirective extends DefaultFabDirective{

  @Input() override defaultBackground: string = '#C5DCFA80';

  constructor(protected override el: ElementRef, protected override renderer: Renderer2) {
    super(el, renderer)
   
    this.setStyle('background', this.defaultBackground);
    this.setStyle('border', '1px solid #C0C0C0');

    this.setStyle('color', '#1672EC');
  }
   
  @HostListener('mouseenter') override onMouseEnter() {
    this.setStyle('color', '#0F56B3');
    this.setStyle('background', '#C5DCFA');
  }
   
  @HostListener('mouseleave') override onMouseLeave() {
    this.setStyle('color', '#1672EC');
    this.setStyle('background', this.defaultBackground);
  }
   
}
