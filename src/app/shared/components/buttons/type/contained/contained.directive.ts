import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DefaultDirective } from '../default/default.directive';

@Directive({
  selector: '[br-button-contained]'
})
export class ContainedDirective extends DefaultDirective{

  @Input() override defaultBackground: string = '#1672EC';

  constructor(protected override el: ElementRef, protected override renderer: Renderer2) {
    super(el, renderer)
   
    this.setStyle('background', this.defaultBackground);
    this.setStyle('border', '1px solid #C0C0C0');

    this.setStyle('color', '#C5DCFA');
  }
   
  @HostListener('mouseenter') override onMouseEnter() {
    this.setStyle('color', '#ffffff');
    this.setStyle('background', '#0F56B3');
  }
   
  @HostListener('mouseleave') override onMouseLeave() {
    this.setStyle('color', '#C5DCFA');
    this.setStyle('background', this.defaultBackground);
  }
   
}
