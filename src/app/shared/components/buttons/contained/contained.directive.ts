import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DefaultButtonDirective } from '../default/default.directive';

@Directive({
  selector: '[br-button-contained]',
})
export class ContainedButtonDirective extends DefaultButtonDirective {
  @Input() override defaultBackground: string = '#1672EC';

  constructor(
    protected override el: ElementRef,
    protected override renderer: Renderer2
  ) {
    super(el, renderer);

    this.setStyle('background', this.defaultBackground);
    this.setStyle('border', '1.5px solid #C0C0C0');

    this.setStyle('color', '#C5DCFA');
    this.setStyle(
      'box-shadow',
      '0px 1px 2px rgba(15, 86, 179, 0.2), 0px 2px 4px rgba(15, 86, 179, 0.2)'
    );
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
