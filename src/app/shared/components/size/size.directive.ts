import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[br-size]',
})
export class SizeDirective implements OnInit {
  @Input('br-size') size: 'small' | 'medium';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const sizes: any = {
      small: '4px 8px',
      medium: '8px 12px',
    };
    this.renderer.setStyle(this.el.nativeElement, 'padding', sizes[this.size]);
  }
}
