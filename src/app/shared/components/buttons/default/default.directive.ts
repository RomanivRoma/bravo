import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[br-button]',
})
export class DefaultButtonDirective {
  @Input() defaultBackground: string = '#ffffff';

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    const isDisabled = el.nativeElement.getAttribute('disabled') != null;
    this.setStyle('opacity', isDisabled ? '0.6' : '1');

    this.setStyle('padding', '12px 16px');
    this.setStyle('font-size', '16px');
    this.setStyle('font-weight', '700');
    this.setStyle('border-radius', '8px');

    this.setStyle('color', '#616161');
    this.setStyle('background', '#ffffff');
    this.setStyle('border', 'none');
    this.setStyle('transition', 'background .3s, color .3s');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle('color', '#414141');
    this.setStyle('background', 'rgba(224, 224, 224, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle('color', '#616161');
    this.setStyle('background', this.defaultBackground);
  }
  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }
  protected setStyle(style: string, property: string) {
    this.renderer.setStyle(this.el.nativeElement, style, property);
  }
}
