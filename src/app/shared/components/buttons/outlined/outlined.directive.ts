import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { DefaultButtonDirective } from '../default/default.directive';

@Directive({
  selector: '[br-button-outlined]'
})
export class OutlinedButtonDirective extends DefaultButtonDirective{

  @Input() override defaultBackground: string = '#ffffff';

  constructor(protected override el: ElementRef, protected override renderer: Renderer2) {
    super(el, renderer)
   
    this.setStyle('background', this.defaultBackground);
    this.setStyle('border', '1px solid #C0C0C0');

    this.setStyle('color', '#1672EC');
  }
   
  @HostListener('mouseenter') override onMouseEnter() {
    this.setStyle('color', '#0F56B3');
    this.setStyle('background', 'rgba(224, 224, 224, 0.5)');
  }
   
  @HostListener('mouseleave') override onMouseLeave() {
    this.setStyle('color', '#1672EC');
    this.setStyle('background', this.defaultBackground);
  }
   
}
